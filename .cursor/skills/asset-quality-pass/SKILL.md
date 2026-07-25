---
name: asset-quality-pass
description: Audits and improves background, image, video, canvas, SVG, 3D, and generated-asset quality across responsive breakpoints without fabricating product evidence.
---
# Asset Quality Pass

Run when imagery, backgrounds, generated art, canvas, shaders, video, or product screenshots materially shape the design.

## Inspect source quality

For every important asset, record:

- intrinsic dimensions and aspect ratio;
- display dimensions at target breakpoints;
- whether the asset is being enlarged beyond a credible source size;
- compression format and visible artifacts;
- mobile crop and focal point;
- light/dark contrast needs;
- whether a higher-resolution source or a separate responsive crop is required.

## Raster and generated imagery

- Use a source large enough for the largest real render, generally with high-density displays in mind.
- Do not use a small generated image as a full-bleed desktop background and hide artifacts with blur.
- Regenerate weak source art rather than repeatedly filtering it.
- Create separate mobile art direction when the desktop crop loses the subject or composition.
- Prefer modern optimized formats and responsive delivery.
- Preserve texture and detail where the concept depends on them; do not over-compress atmospheric art.

## Product evidence

Use real screenshots or recordings for real products. Do not sharpen, regenerate, or repaint a real interface in a way that changes what the product actually is.

## SVG, canvas, WebGL, and 3D

- Match canvas resolution to device pixel ratio within a sensible performance cap.
- Avoid blurry low-resolution render targets.
- Test resize behavior and dynamic viewport changes.
- Provide static or simplified fallbacks.
- Verify mobile GPU cost and battery impact.

## Integration

Check:

- responsive sizing and crop;
- loading priority for the first screen;
- placeholder or transition behavior;
- cumulative layout shift;
- contrast behind text;
- reduced-motion alternatives for animated media;
- graceful degradation when an asset fails.

The browser render, not the source file alone, determines whether the asset passes.
