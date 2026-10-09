export interface TextureBreakdownItem {
  name: string;
  resolution: string;
  description: string;
}

export interface ProcessStage {
  phase: string;
  title: string;
  description: string;
  techniques: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  filterCategory: "modeling" | "texturing" | "environments" | "motion";
  featured: boolean;
  year: string;
  shortDescription: string;
  objective: string;
  software: string[];
  techniques: string[];
  heroImage: string;
  wireframeImage?: string;
  textureBreakdown?: TextureBreakdownItem[];
  processStages: ProcessStage[];
  galleryImages: {
    url: string;
    caption: string;
    label: string;
  }[];
  keyHighlights: string[];
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "thors-hammer",
    title: "Thor's Hammer (Mjölnir)",
    subtitle: "Mythic Hero Prop & Hard-Surface Study",
    category: "3D Modeling / Texturing / Lighting",
    filterCategory: "modeling",
    featured: true,
    year: "2025",
    shortDescription:
      "A fantasy-inspired hero prop exploring metallic materials, engraved details, surface wear, and dramatic cinematic presentation.",
    objective:
      "Design a production-ready cinematic hero prop that balances mythic Norse ornamentation with believable battle wear, heavy metal micro-abrasions, and weathered leather binding.",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer"],
    techniques: [
      "Subdivision Hard-Surface Modeling",
      "Manual UV Packing (0-1 UDIM workflow)",
      "Multi-Layer PBR Texturing",
      "High-to-Low Poly Normal Baking",
      "Directional Rim & Key Lighting in Arnold",
    ],
    heroImage: "/images/projects/thors-hammer/hero.svg",
    wireframeImage: "/images/projects/thors-hammer/wireframe.svg",
    keyHighlights: [
      "Procedural and hand-painted micro-edge wear along striking edges",
      "Custom Norse rune displacement detailing baked directly from high-poly mesh",
      "Realistic leather grip wrap featuring roughness variation and stitch relief",
      "Cinematic Arnold three-point lighting setup with volumetric red rim glow",
    ],
    textureBreakdown: [
      {
        name: "Base Color (Albedo)",
        resolution: "4096 x 4096",
        description: "Dark gunmetal alloy accented with ancient oxidized brass inlays.",
      },
      {
        name: "Roughness Map",
        resolution: "4096 x 4096",
        description: "Fingerprint smudges, battle scratches, and matte leather wear.",
      },
      {
        name: "Metallic Map",
        resolution: "4096 x 4096",
        description: "Binary segregation between conductive forged steel and non-metal leather wrap.",
      },
      {
        name: "Normal & Height Map",
        resolution: "4096 x 4096",
        description: "Crisp rune engravings, hammer dents, and intricate stitching relief.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Blockout & Topological Flow",
        description:
          "Established accurate silhouettes and silhouette proportions in Maya. Clean quad topology ensured artifact-free subdivision smoothing under extreme camera close-ups.",
        techniques: ["Polygon Modeling", "Quad Topology", "Support Loops"],
      },
      {
        phase: "02",
        title: "UV Unwrapping & Density Balance",
        description:
          "Unwrapped with minimized seams hidden along natural material transitions and beveled edges. Texel density optimized for high-resolution 4K asset baking.",
        techniques: ["UV Shell Optimization", "Texel Density Matching"],
      },
      {
        phase: "03",
        title: "PBR Material Craftsmanship",
        description:
          "Layered smart materials in Substance 3D Painter starting from raw metal base, oxidized depth layers, curvature-driven edge chips, and organic hand-painted dust deposits.",
        techniques: ["Smart Masks", "Anchor Points", "Grunge Maps"],
      },
      {
        phase: "04",
        title: "Cinematic Lighting & Arnold Render",
        description:
          "Imported into Maya with aiStandardSurface shaders. Configured physical lights with color temperature contrast (cool rim, warm key) and depth-of-field.",
        techniques: ["Arnold aiStandardSurface", "Physical Sun & Sky", "ACEScg Color Pipeline"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/thors-hammer/beauty-01.svg",
        caption: "Front 3/4 beauty render showcasing ancient rune engravings and rim highlights",
        label: "Beauty Render",
      },
      {
        url: "/images/projects/thors-hammer/wireframe.svg",
        caption: "Wireframe topology demonstration showing clean quad distribution",
        label: "Topology Breakdown",
      },
      {
        url: "/images/projects/thors-hammer/detail-01.svg",
        caption: "Extreme close-up of the weathered leather wrap and metallic edge chipping",
        label: "Macro Detail",
      },
    ],
  },
  {
    slug: "temple-environment",
    title: "Temple Environment",
    subtitle: "Mythological Architecture & Atmospheric Setting",
    category: "Environment Modeling / Texturing",
    filterCategory: "environments",
    featured: true,
    year: "2025",
    shortDescription:
      "A traditional architectural study featuring temple-inspired forms, stone materials, ornamental details, and atmospheric lighting.",
    objective:
      "Construct a grand ancient sacred environment that merges traditional temple geometry with evocative moody lighting, detailed stone weathering, and rich spiritual storytelling.",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer"],
    techniques: [
      "Modular Architecture Kit",
      "PBR Stone & Moss Material Authoring",
      "Atmospheric Volumetric Fog",
      "Sculpted Pillar Bas-Reliefs",
      "Cinematic Camera Framing",
    ],
    heroImage: "/images/projects/temple-environment/hero.svg",
    wireframeImage: "/images/projects/temple-environment/wireframe.svg",
    keyHighlights: [
      "Modular architectural kit allowing flexible assembly of pillars, cornices, and sanctum walls",
      "Layered weathered sandstone textures with damp crevices and moss accumulation",
      "Dramatic volumetric god-rays piercing through stone skylights in Arnold",
      "Rich cultural aesthetic celebrating sacred temple craftsmanship and timeless serenity",
    ],
    textureBreakdown: [
      {
        name: "Carved Stone Albedo",
        resolution: "4096 x 4096",
        description: "Warm aged granite with localized mineral staining and dirt accumulation.",
      },
      {
        name: "Moss & Dampness Mask",
        resolution: "2048 x 2048",
        description: "Roughness suppression in shadow areas simulating damp temple stone.",
      },
      {
        name: "High-Frequency Displacement",
        resolution: "4096 x 4096",
        description: "Chiseled stone reliefs, crack lines, and weathered stone edges.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Architectural Research & Modular Planning",
        description:
          "Studied classical Dravidian and ancient Indian temple architectural blueprints to draft modular columns, decorative lintels, and temple sanctum chambers.",
        techniques: ["Modular Grid Systems", "Architectural Proportions"],
      },
      {
        phase: "02",
        title: "Environment Asset Modeling",
        description:
          "Built high-fidelity hero pieces and structural building blocks in Autodesk Maya, ensuring seamless snapping and edge continuity across adjoining modules.",
        techniques: ["Hard-Surface Modeling", "Bevel Shaders", "Boolean Cleanup"],
      },
      {
        phase: "03",
        title: "Procedural Stone & Grunge Texturing",
        description:
          "Created authentic stone PBR surfaces in Substance Painter with curvature-based dust, ambient occlusion dirt masks, and weathering gradients along lower foundations.",
        techniques: ["Tri-Planar Projection", "Procedural Weathering"],
      },
      {
        phase: "04",
        title: "Atmospheric Lighting & Final Grading",
        description:
          "Orchestrated god rays with Arnold Volumetric Scattering, subtle oil lamps casting warm flickering amber glows against ancient stone sanctuaries.",
        techniques: ["Volumetric Light Scattering", "ACES Color Grading"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/temple-environment/beauty-01.svg",
        caption: "Grand sanctuary vista with volumetric god rays and warm lamp accents",
        label: "Environment Vista",
      },
      {
        url: "/images/projects/temple-environment/wireframe.svg",
        caption: "Modular temple column and sanctum entryway wireframe breakdown",
        label: "Modular Wireframe",
      },
      {
        url: "/images/projects/temple-environment/detail-01.svg",
        caption: "Carved stone pillar macro detailing showing stone grain and edge erosion",
        label: "Stone Texture Study",
      },
    ],
  },
  {
    slug: "vintage-gramophone",
    title: "Vintage Gramophone",
    subtitle: "High-Fidelity Product Visualization & Antique Study",
    category: "Product Modeling / Texturing",
    filterCategory: "modeling",
    featured: true,
    year: "2024",
    shortDescription:
      "A retro-inspired product visualization combining curved forms, wood textures, aged brass, and studio lighting.",
    objective:
      "Capture the tactile elegance of early 20th-century acoustics, highlighting warm varnished mahogany, hammered brass acoustic horns, and mechanical playback needles.",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer"],
    techniques: [
      "Precision Curve & Lathe Modeling",
      "Anisotropic Brushed Metal Shading",
      "Clearcoat Varnish Wood Simulation",
      "Mechanical Gear Assembly",
      "Studio Commercial Lighting",
    ],
    heroImage: "/images/projects/vintage-gramophone/hero.svg",
    wireframeImage: "/images/projects/vintage-gramophone/wireframe.svg",
    keyHighlights: [
      "Complex curved brass horn crafted with perfect smooth radial flow and zero pinching",
      "Multi-layered mahogany wood case with realistic grain depth and lacquer sheen",
      "Intricate mechanical turntable platter, winding crank, and acoustic soundbox arm",
      "Editorial product presentation with soft studio strip softboxes and dark rim lighting",
    ],
    textureBreakdown: [
      {
        name: "Aged Brass PBR",
        resolution: "4096 x 4096",
        description: "Hammered brass with micro-scratches, patina buildup, and subtle anisotropic sheen.",
      },
      {
        name: "Mahogany Clearcoat",
        resolution: "4096 x 4096",
        description: "Deep red-brown wood grain topped with a reflective varnish roughness layer.",
      },
      {
        name: "Vinyl Record Grooves",
        resolution: "2048 x 2048",
        description: "Radial normal pattern reproducing micro-grooves and specular highlights.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Mechanical Modeling & Radial Topology",
        description:
          "Modeled the acoustic horn bell and soundbox arm in Maya using spline curves and precision revolving tools, maintaining continuous edge loops.",
        techniques: ["NURBS & Polygon Hybrid", "Radial Symmetry"],
      },
      {
        phase: "02",
        title: "Clean Seam Layout for Metals & Woods",
        description:
          "Separated UV islands according to physical manufacturing seams to prevent texture stretching on curved brass bells and wood bevels.",
        techniques: ["UDIM Texture Sets", "Distortion Checking"],
      },
      {
        phase: "03",
        title: "Layered Surface Texturing",
        description:
          "Authored rich tactile materials in Substance 3D Painter, simulating decades of careful handling with grease marks around the crank and tarnished metal seams.",
        techniques: ["Anisotropy Maps", "Multi-Layered Varnishing"],
      },
      {
        phase: "04",
        title: "Studio Product Rendering",
        description:
          "Lit using a three-point studio lighting rig with dual strip-box soft reflections to accentuate curved contours and glossy wood reflections.",
        techniques: ["Studio HDRI Mapping", "Depth of Field (Bokeh)"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/vintage-gramophone/beauty-01.svg",
        caption: "Studio product shot of the vintage gramophone with warm specular highlights",
        label: "Studio Beauty",
      },
      {
        url: "/images/projects/vintage-gramophone/wireframe.svg",
        caption: "Wireframe model highlighting radial curvature of the acoustic horn",
        label: "Topology Breakdown",
      },
      {
        url: "/images/projects/vintage-gramophone/detail-01.svg",
        caption: "Macro view of the needle soundbox and vinyl record grooves",
        label: "Mechanical Detail",
      },
    ],
  },
  {
    slug: "banana-car",
    title: "Banana Car",
    subtitle: "Stylized Concept Vehicle & Form Exploration",
    category: "Stylized 3D Modeling",
    filterCategory: "modeling",
    featured: true,
    year: "2024",
    shortDescription:
      "A playful vehicle concept focused on stylized shapes, visual balance, material variation, and presentation.",
    objective:
      "Translate an imaginative cartoon concept into a tangible 3D asset with charming proportions, organic curves, clean surface reflection lines, and vibrant automotive appeal.",
    software: ["Autodesk Maya", "Arnold Renderer"],
    techniques: [
      "Organic-to-Mechanical Form Blending",
      "Car Paint Material Tuning",
      "Stylized Characterful Proportions",
      "Studio Turntable Setup",
    ],
    heroImage: "/images/projects/banana-car/hero.svg",
    wireframeImage: "/images/projects/banana-car/wireframe.svg",
    keyHighlights: [
      "Expressive, whimsical silhouette blending automotive speed lines with organic banana curves",
      "Chunky retro-futuristic tires with deep cartoon treads and chrome hubcaps",
      "Stylized peel cockpit canopy with smooth curvature continuity and aerodynamic accents",
      "Vibrant high-gloss lacquer finish with warm studio highlights",
    ],
    processStages: [
      {
        phase: "01",
        title: "Concept Silhouette & Proportion Matching",
        description:
          "Established energetic gesture lines and exaggerated volumes to balance the fruit curvature with functioning automotive chassis logic.",
        techniques: ["Silhouette Design", "Proportion Balancing"],
      },
      {
        phase: "02",
        title: "Hard-Surface & Organic Poly Modeling",
        description:
          "Modeled the vehicle chassis in Maya using subdivision surfaces to ensure high-gloss reflections flowed smoothly across compound curves without pinching.",
        techniques: ["SubD Modeling", "Reflection Line Flow"],
      },
      {
        phase: "03",
        title: "Material Styling & Car Paint",
        description:
          "Created a rich dual-tone automotive shader featuring yellow pearlescent fleck under a protective high-gloss clearcoat, paired with matte rubber accents.",
        techniques: ["Flake Car Paint Shaders", "Stylized PBR"],
      },
      {
        phase: "04",
        title: "Playful Studio Presentation",
        description:
          "Rendered on an infinity sweep stage with rim lights framing the dynamic wedge profile of the vehicle.",
        techniques: ["Studio Cyclorama", "Rim Accents"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/banana-car/beauty-01.svg",
        caption: "Dynamic 3/4 front view showcasing the banana aerodynamic cockpit and chunky wheels",
        label: "Stylized Concept",
      },
      {
        url: "/images/projects/banana-car/wireframe.svg",
        caption: "Quad wireframe layout showing the continuous curvature lines",
        label: "Curvature Topology",
      },
    ],
  },
  {
    slug: "material-explorations",
    title: "Material Explorations",
    subtitle: "PBR Material Studies & Shader Research",
    category: "PBR Texturing",
    filterCategory: "texturing",
    featured: true,
    year: "2025",
    shortDescription:
      "A collection of material studies exploring wood grain, metal, stone, roughness, grunge, and edge wear.",
    objective:
      "Conduct in-depth scientific and artistic studies on how light interacts with varied physical surfaces: oxidized copper, oiled teakwood, hammered iron, weathered marble, and charred carbon.",
    software: ["Substance 3D Painter", "Substance Designer", "Arnold Renderer"],
    techniques: [
      "Procedural Noise Generators",
      "Curvature & World Space Normal Masking",
      "Multi-Octave Roughness Variation",
      "Photorealistic Macro Detail Authoring",
    ],
    heroImage: "/images/projects/material-studies/hero.svg",
    keyHighlights: [
      "Photorealistic micro-surface imperfections designed to avoid repeating procedural patterns",
      "Accurate real-world IOR (Index of Refraction) and metallic reflection coefficients",
      "Dynamic procedural wear systems adaptable across varied asset geometries",
      "Comprehensive asset library optimized for realtime AAA and cinematic offline renderers",
    ],
    textureBreakdown: [
      {
        name: "Aged Weathered Copper",
        resolution: "4096 x 4096",
        description: "Rich green verdigris patina creeping into crevices over conductive copper core.",
      },
      {
        name: "Oiled Antique Teakwood",
        resolution: "4096 x 4096",
        description: "Tactile pores, subtle knots, and hand-rubbed wax finish with varying specular gloss.",
      },
      {
        name: "Cracked Basalt Stone",
        resolution: "4096 x 4096",
        description: "High-contrast mineral veining with matte volcanic porosity and micro-fractures.",
      },
      {
        name: "Forged Damascene Steel",
        resolution: "4096 x 4096",
        description: "Acid-etched wavy steel grain patterns with alternating microscopic roughness bands.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Physical Reference Analysis",
        description:
          "Gathered macro macro-photography of real-world materials under polarized light to dissect layer sequences from base substrate to surface oxidation.",
        techniques: ["Macro Photography Breakdown", "Layered Synthesis"],
      },
      {
        phase: "02",
        title: "Substance Procedural Layering",
        description:
          "Stacked procedural noises (Perlin, Crystal, Voronoi) combined with custom grunge bitmaps and slope-blur filters to synthesize natural randomness.",
        techniques: ["Procedural Graphs", "Slope Blur Filters"],
      },
      {
        phase: "03",
        title: "Roughness Calibration & Light Response",
        description:
          "Carefully balanced specular roughness levels using grayscale histograms to ensure natural reflection response in both dim interior and harsh exterior environments.",
        techniques: ["Histogram Balancing", "Energy Conservation"],
      },
      {
        phase: "04",
        title: "Cross-Engine Material Validation",
        description:
          "Validated shaders across Arnold, Unreal Engine 5, and Marmoset Toolbag to guarantee seamless visual consistency across rendering pipelines.",
        techniques: ["Color Space Standardization", "Cross-Pipeline Testing"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/material-studies/beauty-01.svg",
        caption: "Material sphere swatch study showing oxidized copper patina and teakwood",
        label: "Shader Swatches",
      },
      {
        url: "/images/projects/material-studies/detail-01.svg",
        caption: "Micro-surface roughness map comparison under grazing light",
        label: "Roughness Map Analysis",
      },
    ],
  },
  {
    slug: "motion-graphics",
    title: "Cinematic Motion Graphics",
    subtitle: "Kinetic Typography, Logo Reveals & Broadcast Design",
    category: "Motion Design",
    filterCategory: "motion",
    featured: true,
    year: "2025",
    shortDescription:
      "A collection of kinetic typography, title animation, logo reveals, transitions, and cinematic visual sequences.",
    objective:
      "Craft high-octane cinematic title sequences and brand animations that leverage purposeful rhythm, dynamic easing curves, optical glow dissipation, and bold visual pacing.",
    software: ["Adobe After Effects", "Adobe Premiere Pro", "Autodesk Maya"],
    techniques: [
      "Custom Easing & Speed Graph Curve Crafting",
      "Kinetic Typography Sequences",
      "3D Camera Tracking & Depth Passes",
      "Optical Flares & Glitch Transitions",
      "Audio-Synchronized Visual Beats",
    ],
    heroImage: "/images/projects/motion-graphics/hero.svg",
    keyHighlights: [
      "Punchy kinetic typography sequences synced to cinematic percussion beats",
      "Sophisticated 3D camera sweeps traversing layered typography and floating light particles",
      "Custom glitch and film burn transitions designed frame-by-frame for maximum visual tension",
      "Broadcast-ready title identity package with modular intro slates and lower-thirds",
    ],
    processStages: [
      {
        phase: "01",
        title: "Moodboard & Storyboarding",
        description:
          "Mapped out visual beats, pacing markers, and keyframe transitions on a timeline grid to achieve synchronized impact with audio rhythm.",
        techniques: ["Visual Pacing", "Timeline Storyboarding"],
      },
      {
        phase: "02",
        title: "Typography & Layout Construction",
        description:
          "Designed bold typographic lockups with contrasting weights and tracking, leveraging cinematic small caps and architectural framing.",
        techniques: ["Cinematic Layout", "Negative Space"],
      },
      {
        phase: "03",
        title: "Animation Curves & Motion Choreography",
        description:
          "Hand-crafted speed graphs in After Effects for snappy acceleration into smooth, controlled deceleration, eliminating rigid linear motion.",
        techniques: ["Speed Graph Tuning", "Secondary Motion"],
      },
      {
        phase: "04",
        title: "Post-Processing, Glows & Color Grading",
        description:
          "Added chromatic aberration, cinematic film grain, lens distortion, and atmospheric volumetric red glows for theater-grade polish.",
        techniques: ["Color Grading", "Film Emulation", "Chromatic Passes"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/motion-graphics/beauty-01.svg",
        caption: "Kinetic typography title sequence frame with crimson rim glow and optical flare",
        label: "Title Reveal",
      },
      {
        url: "/images/projects/motion-graphics/detail-01.svg",
        caption: "Multi-layered 3D space typography pass with depth-of-field blur",
        label: "3D Space Motion",
      },
    ],
  },
];
