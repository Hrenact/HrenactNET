---
prev:
  text: 'Runtime Behaviour'
  link: 'UnitySnippet/RuntimeBehaviour'
next: false
---



# Shader / Rendering

所有视觉效果统一归类。

这些资产没有存放路径要求。

## Air Wall Warning

空气墙边缘提醒 Shader，可调整网格密度、线条粗细、淡出距离和线条颜色。

::: details 查看或复制代码
```Shader
Shader "AirWallWarning"
{
    Properties
    {
        _Tiling("Tiling", Float) = 1.0
        _GridThickness("Grid Thickness", Range(0, 1)) = 0.1
        _FadeDistance("Fade Distance", Float) = 1.0
        [HDR]_GridColor("Grid Color", Color) = (1, 1, 1, 1)
    }
    SubShader
    {
        Tags { "RenderType"="Opaque"
               "Queue"="Transparent" }
        LOD 100

        Blend SrcAlpha One
        BlendOp Add
        Cull Off
        ZWrite Off

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            
            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                float3 worldPos : TEXCOORD0;
                float3 worldNormal : TEXCOORD1;
            };
            
            float _Tiling;
            float _GridThickness;
            float _FadeDistance;
            float4 _GridColor;

            float3 WorldHeadPosition()
            {
            #if defined(USING_STEREO_MATRICES)
                return (unity_StereoWorldSpaceCameraPos[0] + unity_StereoWorldSpaceCameraPos[1]) * 0.5;
            #else
                return _WorldSpaceCameraPos;
            #endif
            }

            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
                o.worldNormal = mul((float3x3)unity_ObjectToWorld, v.normal);

                return o;
            }
            
            float4 frag (v2f i) : SV_Target
            {
                // 计算网格线的分数坐标
                float3 worldPos = i.worldPos;
                float3 worldNormal = normalize(i.worldNormal);

                // 选择一个平面来平铺网格
                float3 absNormal = abs(worldNormal);
                float2 gridUV;
                if (absNormal.x > absNormal.y && absNormal.x > absNormal.z)
                {
                    gridUV = worldPos.yz;
                }
                else if (absNormal.y > absNormal.x && absNormal.y > absNormal.z)
                {
                    gridUV = worldPos.xz;
                }
                else
                {
                    gridUV = worldPos.xy;
                }

                float2 gridFrac = frac(gridUV * _Tiling + _GridThickness * 0.5);
                float2 gridDistance = 1 - gridFrac;

                float gridAmount = max(gridDistance.x, gridDistance.y) > (1 - _GridThickness) ? 1 : 0;

                float distanceFromHead = length(WorldHeadPosition() - i.worldPos);

                float fadeAmount = saturate(_FadeDistance - distanceFromHead);
                fadeAmount *= fadeAmount * fadeAmount;
                fadeAmount = smoothstep(1, .1, 1 - fadeAmount);

                return float4(1, 1, 1, gridAmount * fadeAmount) * _GridColor;
            }
            ENDCG
        }
    }
}
```
:::