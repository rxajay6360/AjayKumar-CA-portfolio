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
  wireframeBeautyImage?: string;
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
    slug: "hanuman-gadha",
    title: "HANUMAN GADHA",
    subtitle: "Divine Hero Prop & Mythological Hard-Surface Craftsmanship",
    category: "3D Modeling / Texturing / Lighting",
    filterCategory: "modeling",
    featured: true,
    year: "2025",
    shortDescription:
      "A mythic, ornate golden mace (Gadha) inspired by Hindu mythology, featuring intricate sculptural ornamentation, metallic PBR texturing, and cinematic mountain atmosphere.",
    objective:
      "Design and render an imposing divine hero prop embedded in a rugged alpine landscape, balancing mythic reverence with realistic gold material response and dramatic lighting.",
    software: ["Autodesk Maya", "ZBrush", "Substance 3D Painter", "Arnold Renderer"],
    techniques: [
      "High-Poly Hard Surface & Sculpting",
      "PBR Gold & Weathered Metal Texturing",
      "Atmospheric Volumetric Lighting",
      "Cinematic Alpine Environment Staging",
    ],
    heroImage: "/images/projects/hanuman-gadha/closeup.jpg",
    wireframeImage: "/images/projects/hanuman-gadha/Front-wireframe.jpg",
    wireframeBeautyImage: "/images/projects/hanuman-gadha/Front.jpg",
    keyHighlights: [
      "Ornate golden finish with realistic micro-roughness, specular reflections, and surface wear",
      "Dynamic alpine setting with snow coverage, rocky cliff terrain, and dramatic sky backdrop",
      "High-fidelity close-up renders capturing fine filigree patterns and heavy metallic heft",
      "Multiple cinematic perspectives from intimate macro closeups to expansive aerial shots",
    ],
    textureBreakdown: [
      {
        name: "Base Color (Albedo)",
        resolution: "4096 x 4096",
        description: "Lustrous ceremonial gold alloy accented with ancient oxidized brass inlays.",
      },
      {
        name: "Roughness Map",
        resolution: "4096 x 4096",
        description: "Fine metallic brushing, surface abrasions, and frost accumulation.",
      },
      {
        name: "Metallic Map",
        resolution: "4096 x 4096",
        description: "Full metallic conductivity response across ornate filigree carvings and heavy pommel.",
      },
      {
        name: "Normal & Height Map",
        resolution: "4096 x 4096",
        description: "Intricate floral relief carvings, bevel insets, and embossed sacred motifs.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Blockout & Sculptural Silhouettes",
        description:
          "Established monumental silhouette proportions and balanced mass distribution, followed by high-resolution ornamental detailing.",
        techniques: ["Silhouette Study", "Hard-Surface Blockout", "Ornamental Sculpting"],
      },
      {
        phase: "02",
        title: "Topology & UV Layout",
        description:
          "Constructed clean quad topology with optimized UDIM UV mapping ensuring high-resolution surface fidelity without seam artifacts.",
        techniques: ["Clean Topology", "UDIM Packing", "Texel Density Optimization"],
      },
      {
        phase: "03",
        title: "PBR Material Craftsmanship",
        description:
          "Layered rich procedural and hand-painted gold shaders with subtle weathering, dust accumulation in crevices, and edge highlights.",
        techniques: ["Gold PBR Shader", "Roughness Breakups", "Edge Curvature Masks"],
      },
      {
        phase: "04",
        title: "Cinematic Environment & Lighting",
        description:
          "Staged atop snow-capped mountain ridges with volumetric mist, golden sun rim lights, and dramatic atmospheric depth.",
        techniques: ["Volumetric Lighting", "Depth of Field", "Arnold Render Engine"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/hanuman-gadha/closeup.jpg",
        caption: "Close-up beauty render highlighting the golden ornamentation, filigree craft, and snowy ridge vista",
        label: "Closeup Render",
      },
      {
        url: "/images/projects/hanuman-gadha/Front.jpg",
        caption: "Front view showcasing full weapon proportions and striking silhouette against the alpine landscape",
        label: "Front View",
      },
      {
        url: "/images/projects/hanuman-gadha/side.jpg",
        caption: "Side profile angle emphasizing form, weight, balance, and shaft details",
        label: "Side Profile",
      },
      {
        url: "/images/projects/hanuman-gadha/uppershot.jpg",
        caption: "High-angle dramatic perspective overlooking the snowy Himalayan peak",
        label: "Upper Shot",
      },
    ],
  },
  {
    slug: "kgf-narachi-gate",
    title: "KGF NARACHI GATE INDIA",
    subtitle: "Cinematic Mining Fortress & Industrial Environment Art",
    category: "Environment Modeling / Texturing / Lighting",
    filterCategory: "environments",
    featured: true,
    year: "2025",
    shortDescription:
      "A gritty, monumental industrial set reconstruction inspired by K.G.F Narachi, featuring the imposing front gate fortress, weathered metal structures, industrial props, and atmospheric lighting.",
    objective:
      "Recreate the iconic Narachi gate environment from K.G.F with cinematic realism, capturing harsh industrial grit, rusted corrugated sheets, watchtowers, and moody atmospheric contrasts between daylight and night.",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer"],
    techniques: [
      "Large-Scale Industrial Environment Modeling",
      "PBR Rust & Heavy Weathering Texturing",
      "Day & Night Cinematic Lighting Setups",
      "Volumetric Dust & Atmosphere",
    ],
    heroImage: "/images/projects/kgf-narachi/narachi-front-gate.jpg",
    wireframeImage: "/images/projects/kgf-narachi/narachi-front-gate-wireframe.jpg",
    wireframeBeautyImage: "/images/projects/kgf-narachi/narachi-front-gate.jpg",
    keyHighlights: [
      "Monumental fortress front gate with authentic industrial wear, rust streaks, and heavy steel beams",
      "Dynamic dual-lighting studies comparing harsh desert daylight against moody cinematic night illumination",
      "Detailed environmental props including rusted oil barrels, warning signage, and observation towers",
      "Atmospheric dust scattering and high-contrast dramatic cinematic framing",
    ],
    textureBreakdown: [
      {
        name: "Weathered Steel Albedo",
        resolution: "4096 x 4096",
        description: "Dark oxidized iron plates layered with peeling paint, dust deposits, and mineral rust.",
      },
      {
        name: "Roughness & Grunge Map",
        resolution: "4096 x 4096",
        description: "Surface roughness breakups simulating grease stains, metal scratches, and dry sand grit.",
      },
      {
        name: "Metallic Map",
        resolution: "4096 x 4096",
        description: "Contrasts between raw exposed conductive steel, painted surfaces, and oxidized rust.",
      },
      {
        name: "Normal & Cavity Map",
        resolution: "4096 x 4096",
        description: "Heavy structural weld seams, corrugated sheet ridges, rivet studs, and pitted surface erosion.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Architectural & Set Study",
        description:
          "Analyzed references from K.G.F film sequences to draft the monumental scale, barricades, watchtowers, and entrance proportions.",
        techniques: ["Film Set Analysis", "Scale & Proportion Blockout"],
      },
      {
        phase: "02",
        title: "Hard-Surface Environment Modeling",
        description:
          "Constructed high-detail steel trusses, barbed wire fencing, heavy industrial gates, and watchtowers in Autodesk Maya.",
        techniques: ["Modular Trusses", "Hard-Surface Modeling", "Bevel Smoothing"],
      },
      {
        phase: "03",
        title: "PBR Industrial Grunge & Texturing",
        description:
          "Authored multi-layer smart materials in Substance Painter featuring flaking industrial paint, multi-stage rust, and sand accumulation.",
        techniques: ["Substance Smart Materials", "Tri-Planar Grunge", "Curvature Rust Masks"],
      },
      {
        phase: "04",
        title: "Cinematic Lighting: Day vs. Night",
        description:
          "Established contrasting lighting scenarios: blazing high-noon sun with dust kickup, and moody night lighting with warm sodium floodlights.",
        techniques: ["Volumetric Fog", "Sodium Lamp Lighting", "Arnold aiStandardSurface"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/kgf-narachi/narachi-front-gate.jpg",
        caption: "Iconic front gate fortress view under daytime cinematic lighting",
        label: "Front Gate (Day)",
      },
      {
        url: "/images/projects/kgf-narachi/narachi-front-gate-night.jpg",
        caption: "Atmospheric night illumination highlighting moody floodlights and high-contrast shadows",
        label: "Front Gate (Night)",
      },
      {
        url: "/images/projects/kgf-narachi/danger-ahead-day.jpg",
        caption: "Warning perimeter perspective with barbed wire fence and observation tower",
        label: "Danger Ahead (Day)",
      },
      {
        url: "/images/projects/kgf-narachi/danger-ahead-night.jpg",
        caption: "Night perimeter view with ominous spotlight beams and deep industrial darkness",
        label: "Danger Ahead (Night)",
      },
      {
        url: "/images/projects/kgf-narachi/oil-can-day.jpg",
        caption: "Industrial prop staging featuring weathered oil barrels and corrugated iron textures",
        label: "Oil Barrels (Day)",
      },
      {
        url: "/images/projects/kgf-narachi/oil-can-night.jpg",
        caption: "Moody low-angle render of the oil drums under amber lantern glow",
        label: "Oil Barrels (Night)",
      },
      {
        url: "/images/projects/kgf-narachi/tower-view.jpg",
        caption: "High-angle observation tower render capturing the full gate perimeter layout",
        label: "Watchtower View",
      },
    ],
  },
  {
    slug: "futuristic-single-wheel-bike",
    title: "Futuristic Single Wheel Bike",
    subtitle: "THE FUTURE MOVES DIFFERENTLY",
    category: "Hard-Surface Modeling / Concept Vehicle / Texturing",
    filterCategory: "modeling",
    featured: true,
    year: "2025",
    shortDescription:
      "A high-tech monowheel concept vehicle engineered with intricate mechanical suspension, heavy tread tire, exposed internal engine machinery, and futuristic lighting.",
    objective:
      "Design and model an avant-garde futuristic single-wheel motorcycle that balances believable industrial engineering, heavy spring dampening, and aerodynamic hard-surface styling.",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer"],
    techniques: [
      "Complex Hard-Surface Sub-D Modeling",
      "Mechanical Suspension & Shock Assembly",
      "PBR Metallic & Carbon Polymer Texturing",
      "Studio Automotive Showcase Lighting",
    ],
    heroImage: "/images/projects/futuristic-bike/front-low-angle.jpg",
    wireframeImage: "/images/projects/futuristic-bike/front-low-angle-wireframe.jpg",
    wireframeBeautyImage: "/images/projects/futuristic-bike/front-low-angle.jpg",
    keyHighlights: [
      "Center hubless monowheel design featuring heavy ribbed tire tread and dynamic shock suspension",
      "Matching 1:1 wireframe topology comparison showing clean quad distribution across complex mechanical parts",
      "Multiple cinematic studio angles highlighting headlight glow, spring compression, and rear tool shapes",
      "PBR multi-layered texturing with brushed aluminum, matte rubber, exhaust heat tint, and gloss body panels",
    ],
    textureBreakdown: [
      {
        name: "Rubber & Polymer Tread",
        resolution: "4096 x 4096",
        description: "High-density synthetic tire rubber with directional tread siping and road wear roughness.",
      },
      {
        name: "Anodized Alloy Body",
        resolution: "4096 x 4096",
        description: "Sleek coated metal panels with subtle clearcoat reflections and micro-metallic flake.",
      },
      {
        name: "Exhaust & Mechanical Steel",
        resolution: "4096 x 4096",
        description: "Tempered heat-treated stainless steel with subtle iridescent thermal gradients.",
      },
      {
        name: "Spring & Suspension Damper",
        resolution: "4096 x 4096",
        description: "Heavy-duty coiled suspension spring with hydraulic oil sheen and dust accumulation in coils.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Concept Silhouette & Ergonomics",
        description:
          "Established radical monowheel vehicle proportions, driver seating posture, and central balance axis in Maya.",
        techniques: ["Ergonomic Proportioning", "Silhouette Blockout"],
      },
      {
        phase: "02",
        title: "Sub-D Mechanical Assembly",
        description:
          "Detailed all internal suspension linkages, hydraulic lines, shock coils, and engine block assemblies with clean quad topology.",
        techniques: ["Subdivision Hard-Surface", "Mechanical Rigging Flow"],
      },
      {
        phase: "03",
        title: "PBR Material Craftsmanship",
        description:
          "Layered procedural carbon fibers, matte tire compounds, and glossy painted fairings in Substance 3D Painter.",
        techniques: ["Multi-Material Masking", "Curvature Edge Wear"],
      },
      {
        phase: "04",
        title: "Automotive Studio Lighting",
        description:
          "Configured studio cyclorama stage with overhead softbox strips to sculpt the aggressive curvature and rim silhouettes.",
        techniques: ["Arnold Studio Rig", "Rim Accentuation", "ACEScg Pipeline"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/futuristic-bike/front-low-angle.jpg",
        caption: "Low-angle heroic frontal perspective emphasizing ground clearance and aggressive stance",
        label: "Front Low Angle",
      },
      {
        url: "/images/projects/futuristic-bike/longshot-side-view.jpg",
        caption: "Full lateral profile displaying center wheel integration and chassis proportions",
        label: "Side Profile",
      },
      {
        url: "/images/projects/futuristic-bike/right-view.jpg",
        caption: "Right 3/4 beauty shot showcasing frame mechanics and foot peg assembly",
        label: "Right 3/4 View",
      },
      {
        url: "/images/projects/futuristic-bike/headlight-view.jpg",
        caption: "Front cowl and futuristic headlight cluster detail render",
        label: "Headlight Detail",
      },
      {
        url: "/images/projects/futuristic-bike/spring-view.jpg",
        caption: "Extreme close-up of the heavy hydraulic shock absorber and coiled suspension",
        label: "Suspension Spring",
      },
      {
        url: "/images/projects/futuristic-bike/tyre-shot.jpg",
        caption: "Macro render focusing on the high-traction tread design and inner wheel rim",
        label: "Tire & Rim",
      },
      {
        url: "/images/projects/futuristic-bike/back-tools-shape.jpg",
        caption: "Rear equipment rack and functional utility compartment view",
        label: "Rear Utility View",
      },
      {
        url: "/images/projects/futuristic-bike/uppershot-view.jpg",
        caption: "High-angle perspective highlighting the cockpit, handlebars, and streamlined canopy",
        label: "Upper Cockpit Shot",
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
