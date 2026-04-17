---
prev:
  text: 'Editor Tools'
  link: 'UnitySnippet/EditorTools'
next:
  text: 'Shader / Rendering'
  link: 'UnitySnippet/ShaderRendering'
---



# Runtime Behaviour

游戏运行时逻辑。

这些脚本没有存放路径要求。

## Simple Audio Playlist

- *For VRChat*

无需 UI 的简易音频播放器，将 `Audio Clip` 拖入 `Playlist` 列表即可，支持持久化数据。可选开始时播放或循环播放。

::: details 查看或复制代码
```CS
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;
using VRC.Udon;
using VRC.SDK3.Persistence;

[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class SimpleAudioPlaylist : UdonSharpBehaviour
{
    [Header("Persistence")]
    public string Song_Persistent_Key = "SongIndex_RenameMe";

    [Header("Audio")]
    public AudioSource audioSource;
    public AudioClip[] playlist;

    [Header("Settings")]
    public bool playOnStart = true;
    public bool loopPlaylist = true;

    private int currentIndex = 0;
    private float clipEndTime = 0f;

    void Start()
    {
        if (playlist == null || playlist.Length == 0 || audioSource == null)
            return;

        // ✅ 尝试读取存档
        if (PlayerData.HasKey(Networking.LocalPlayer, Song_Persistent_Key))
        {
            currentIndex = PlayerData.GetInt(Networking.LocalPlayer, Song_Persistent_Key);
        }

        // 安全校验
        if (currentIndex < 0 || currentIndex >= playlist.Length)
        {
            currentIndex = 0;
        }

        if (playOnStart)
        {
            PlayCurrent();
        }
    }

    // ✅ 关键：处理异步加载
    public override void OnPlayerDataUpdated(VRCPlayerApi player, PlayerData.Info[] infos)
    {
        if (player != Networking.LocalPlayer) return;
        if (!PlayerData.HasKey(player, Song_Persistent_Key)) return;

        int savedIndex = PlayerData.GetInt(player, Song_Persistent_Key);

        if (savedIndex < 0 || savedIndex >= playlist.Length) return;

        currentIndex = savedIndex;

        if (playOnStart)
        {
            PlayCurrent();
        }
    }

    void Update()
    {
        if (!audioSource.isPlaying && Time.time >= clipEndTime)
        {
            PlayNext();
        }
    }

    public void PlayCurrent()
    {
        if (playlist.Length == 0) return;

        audioSource.clip = playlist[currentIndex];
        audioSource.Play();

        clipEndTime = Time.time + audioSource.clip.length;

        // ✅ 每次播放都保存
        PlayerData.SetInt(Song_Persistent_Key, currentIndex);
    }

    public void PlayNext()
    {
        if (playlist.Length == 0) return;

        currentIndex++;

        if (currentIndex >= playlist.Length)
        {
            if (loopPlaylist)
            {
                currentIndex = 0;
            }
            else
            {
                return;
            }
        }

        PlayCurrent();
    }

    public void PlayPrevious()
    {
        if (playlist.Length == 0) return;

        currentIndex--;

        if (currentIndex < 0)
        {
            currentIndex = loopPlaylist ? playlist.Length - 1 : 0;
        }

        PlayCurrent();
    }

    // 👉 手动切歌
    public void SetIndex(int index)
    {
        if (index < 0 || index >= playlist.Length) return;

        currentIndex = index;
        PlayCurrent();
    }
}
```
:::

## Rain Audio Controller

- *For VRChat*

在玩家进入或离开 `Collider` 时自动在两个 `Audio Source` 中平滑过渡音量。支持设置过渡时间（秒）和两个 `Audio Source` 的默认音量。

::: details 查看或复制代码
```CS
using UdonSharp;
using UnityEngine;
using VRC.SDKBase;
using VRC.Udon;

[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class RainAudioController : UdonSharpBehaviour
{
    [Header("Fade Settings")]
    public float fadeDuration = 1f;

    [Header("Audio Settings")]
    public AudioSource RainSource2D;
    public float normalVolume2D = 1f;

    public AudioSource RainSource3D;
    public float normalVolume3D = 1f;

    private bool playerInside = false;

    // 渐变控制
    private float startVolume2D;
    private float targetVolume2D;

    private float startVolume3D;
    private float targetVolume3D;

    private float fadeTimer = 0f;
    private bool isFading = false;

    void Start()
    {
        // 检查 Collider
        if (!Utilities.IsValid(GetComponent<Collider>()))
        {
            Debug.LogError("当前脚本的同一Object下没有Collider组件！");
            return;
        }

        // 记录初始音量
        // normalVolume2D = RainSource2D.volume;
        // normalVolume3D = RainSource3D.volume;

        // 默认在室外（你可以按需求改）
        SetState(false, true);
    }

    void Update()
    {
        if (!isFading) return;

        fadeTimer += Time.deltaTime;
        float t = Mathf.Clamp01(fadeTimer / fadeDuration);

        RainSource2D.volume = Mathf.Lerp(startVolume2D, targetVolume2D, t);
        RainSource3D.volume = Mathf.Lerp(startVolume3D, targetVolume3D, t);

        if (t >= 1f)
        {
            isFading = false;
        }
    }

    private void StartFade(float target2D, float target3D)
    {
        startVolume2D = RainSource2D.volume;
        startVolume3D = RainSource3D.volume;

        targetVolume2D = target2D;
        targetVolume3D = target3D;

        fadeTimer = 0f;
        isFading = true;
    }

    /// <summary>
    /// 设置状态（是否在室内）
    /// </summary>
    private void SetState(bool inside, bool force = false)
    {
        if (!force && playerInside == inside) return;

        playerInside = inside;

        if (playerInside)
        {
            // 室内：2D有声音，3D无
            StartFade(normalVolume2D, 0f);
        }
        else
        {
            // 室外：3D有声音，2D无
            StartFade(0f, normalVolume3D);
        }
    }

    public override void OnPlayerTriggerStay(VRCPlayerApi player)
    {
        if (!player.isLocal) return;

        if (!playerInside)

        Debug.Log("[RainAudioController] Player entered trigger");
        SetState(true);
    }

    public override void OnPlayerTriggerExit(VRCPlayerApi player)
    {
        if (!player.isLocal) return;

        Debug.Log("[RainAudioController] Player exited trigger");
        SetState(false);
    }
}
```
:::

## Audio Auto Mute

- *For VRChat*
- *Need ProTV 3.0*

在 `ProTV` 播放媒体时自动将 `Audio Source` 归零，支持多个 `Audio Source` 和不同初始音量，以及设置过渡时间（秒）。可选是否在暂停播放时恢复音量。

::: details 查看或复制代码
```CS
using UdonSharp;
using ArchiTech.SDK;
using UnityEngine;
using VRC.SDKBase;
using VRC.Udon;
using ArchiTech.ProTV;

[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class AudioAutoMute : TVPlugin
{
    [Header("Mute Settings")]
    public bool unmuteOnPause = true;
    public float fadeDuration = 1f;
    
    [Header("Audio Sources")]
    public AudioSource[] audioSources;

    // 每个 AudioSource 独立状态
    private float[] startVolumes;
    private float[] targetVolumes;
    private float[] lastVolumes;
    private float[] fadeTimers;

    public override void Start()
    {
        base.Start();

        int count = audioSources.Length;

        startVolumes = new float[count];
        targetVolumes = new float[count];
        lastVolumes = new float[count];
        fadeTimers = new float[count];

        for (int i = 0; i < count; i++)
        {
            if (audioSources[i] == null) continue;

            lastVolumes[i] = audioSources[i].volume;
            startVolumes[i] = lastVolumes[i];
            targetVolumes[i] = lastVolumes[i];
            fadeTimers[i] = fadeDuration;

            Debug("[AudioAutoMute] Init AudioSource[" + i + "] volume: " + lastVolumes[i]);
        }
    }

    private void Update()
    {
        if (audioSources == null) return;

        for (int i = 0; i < audioSources.Length; i++)
        {
            if (audioSources[i] == null) continue;

            if (fadeTimers[i] < fadeDuration)
            {
                fadeTimers[i] += Time.deltaTime;

                float t = Mathf.Clamp01(fadeTimers[i] / fadeDuration);
                audioSources[i].volume = Mathf.Lerp(startVolumes[i], targetVolumes[i], t);
            }
        }
    }

    private void StartFade(int i, float newTarget)
    {
        if (audioSources[i] == null) return;

        startVolumes[i] = audioSources[i].volume;
        targetVolumes[i] = newTarget;
        fadeTimers[i] = 0f;
    }

    public override void _TvPlay()
    {
        Debug("[AudioAutoMute] TV Play - Muting all audio");

        for (int i = 0; i < audioSources.Length; i++)
        {
            StartFade(i, 0f);
        }
    }

    public override void _TvPause()
    {
        for (int i = 0; i < audioSources.Length; i++)
        {
            if (audioSources[i] == null) continue;

            if (unmuteOnPause)
            {
                Debug("[AudioAutoMute] TV Pause - Restoring volume");
                StartFade(i, lastVolumes[i]);
            }
        }
    }

    public override void _TvStop()
    {
        Debug("[AudioAutoMute] TV Stop - Restoring all audio");

        for (int i = 0; i < audioSources.Length; i++)
        {
            if (audioSources[i] == null) continue;

            StartFade(i, lastVolumes[i]);
        }
    }
}
```
:::

## Multi Image Downloader

- *For VRChat*

批量从 URL 中下载图片并应用到 `Raw Image` 上，支持下载错误时应用回退图片。最大分辨率为 `2048x2048`。

::: details 查看或复制代码
```CS
using UdonSharp;
using UnityEngine;
using VRC.SDK3.Image;
using VRC.SDKBase;
using VRC.Udon;

[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class MultiImageDownloader : UdonSharpBehaviour
{
    [Header("Image Targets (index matched)")]
    [SerializeField] private UnityEngine.UI.RawImage[] targetImages;

    [Header("Image URLs (index matched)")]
    [SerializeField] private VRCUrl[] imageUrls;

    [Header("Fallback Texture (on error)")]
    [SerializeField] private Texture2D fallbackTexture;

    private VRCImageDownloader downloader;
    private IVRCImageDownload[] downloadTasks;
    private Texture2D[] downloadedTextures;

    void Start()
    {
        downloader = new VRCImageDownloader();

        int count = Mathf.Min(targetImages.Length, imageUrls.Length);
        downloadTasks = new IVRCImageDownload[count];
        downloadedTextures = new Texture2D[count];

        for (int i = 0; i < count; i++)
        {
            StartDownload(i);
        }
    }

    private void StartDownload(int index)
    {
        if (imageUrls[index] == null || imageUrls[index].ToString().Length < 8)
        {
            ApplyFallback(index);
            return;
        }

        downloadTasks[index] =
            downloader.DownloadImage(
                imageUrls[index],
                null,
                (VRC.Udon.Common.Interfaces.IUdonEventReceiver)this
            );

        // 用 RawImage 当前 texture 作为“加载中占位”也可以
        targetImages[index].enabled = true;
    }

    public override void OnImageLoadSuccess(IVRCImageDownload result)
    {
        int index = FindTaskIndex(result);
        if (index < 0) return;

        Texture2D tex = result.Result;
        downloadedTextures[index] = tex;

        targetImages[index].texture = tex;
        targetImages[index].enabled = true;

        downloadTasks[index] = null;
    }

    public override void OnImageLoadError(IVRCImageDownload result)
    {
        int index = FindTaskIndex(result);
        if (index < 0) return;

        ApplyFallback(index);
        downloadTasks[index] = null;
    }

    private int FindTaskIndex(IVRCImageDownload task)
    {
        for (int i = 0; i < downloadTasks.Length; i++)
        {
            if (downloadTasks[i] == task)
                return i;
        }
        return -1;
    }

    private void ApplyFallback(int index)
    {
        if (fallbackTexture != null)
        {
            targetImages[index].texture = fallbackTexture;
            targetImages[index].enabled = true;
        }
        else
        {
            targetImages[index].enabled = false;
        }
    }

    private void OnDestroy()
    {
        if (downloader != null)
            downloader.Dispose();
    }
}
```
:::