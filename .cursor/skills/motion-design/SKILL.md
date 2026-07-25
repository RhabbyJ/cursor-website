---
name: motion-design
description: Designs, sources, implements, and refines purposeful responsive motion using CSS, Motion, Motion UI, GSAP, Anime.js, Lenis, or WebGL based on the interaction rather than a fixed animation stack.
---
# Motion Design

Start with the role of motion:

- direct attention;
- explain cause and effect;
- preserve spatial continuity;
- communicate state;
- add tactile feedback;
- express brand personality;
- create a signature narrative moment.

Do not animate every element or use the same entrance repeatedly.

## Source examples before inventing complex motion

For signature motion, search current examples through Motion UI / Motion AI Kit, Aceternity, 21st, Magic UI, React Bits Pro, or supplied reference sites when available.

Record the examples considered and what interaction principle is being adopted. Do not copy unrelated animation merely because it is dramatic.

## Technology routing

- **CSS transitions/keyframes:** hover, focus, simple reveal, small loops, and low-cost microinteractions.
- **Motion:** React component animation, layout transitions, gestures, shared elements, viewport reveals, pointer-responsive values, and most scroll-linked behavior.
- **Motion UI / Motion AI Kit:** polished section patterns, current examples, spring generation, transition editing, and motion auditing when available.
- **GSAP:** complex choreographed timelines, pinned scroll stories, precise sequencing, or plugin-specific needs.
- **Anime.js:** lightweight imperative SVG/DOM timelines or sequences when it is a better fit than GSAP.
- **Lenis or another smooth-scroll layer:** only when the concept truly needs it and accessibility is preserved.
- **Three.js / React Three Fiber / shaders:** spatial, generative, 3D, or WebGL experiences that justify the cost.
- **Animista:** a reference source for isolated CSS keyframes, not a required runtime dependency.

Do not let two systems control the same property on the same element.

## Motion system

Define:

- duration families;
- easing or spring character;
- entrance and exit hierarchy;
- hover, focus, press, and drag feedback;
- scroll behavior;
- section transition logic;
- pointer-follow or parallax limits;
- reduced-motion alternatives;
- performance fallbacks.

## Responsive interaction

Do not treat desktop hover as the complete interaction.

For each signature motion surface, define behavior for:

- fine pointer and hover;
- keyboard focus;
- touch and coarse pointer;
- narrow screens;
- reduced motion;
- lower-powered devices where applicable.

Use springs and transforms that respond promptly to input rather than lagging behind it. Avoid excessive smoothing that makes the interface feel detached. Disable or simplify expensive pointer and WebGL effects when the input or device cannot support them well.

## Verification

Inspect motion in the real browser at normal and reduced-motion settings. Check for layout shifts, jank, delayed feedback, blocked interaction, motion sickness risk, scroll fighting, mobile performance, and whether the motion actually improves understanding or delight.
