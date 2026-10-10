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
    slug: "vintage-gramophone",
    title: "VINTAGE GRAMOPHONE",
    subtitle: "WHERE MUSIC BECOMES MEMORY",
    category: "Product Visualization / Antique Prop / PBR Texturing",
    filterCategory: "modeling",
    featured: true,
    year: "2025",
    shortDescription:
      "A masterfully crafted antique gramophone featuring rich polished wood grain, hammered brass acoustic horn, turntable mechanics, and nostalgic vinyl records.",
    objective:
      "Capture the tactile elegance of early 20th-century acoustics, highlighting warm varnished mahogany, hammered brass acoustic horns, vinyl record grooves, and mechanical playback needles.",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer"],
    techniques: [
      "Precision Hard-Surface & Lathe Modeling",
      "Anisotropic Brushed Brass Shading",
      "Clearcoat Varnish Wood Simulation",
      "Mechanical Turntable & Needle Rigging",
      "Atmospheric Studio Product Lighting",
    ],
    heroImage: "/images/projects/vintage-gramophone/front-view.jpg",
    wireframeImage: "/images/projects/vintage-gramophone/right-side-wireframe.jpg",
    wireframeBeautyImage: "/images/projects/vintage-gramophone/right-side-view.jpg",
    keyHighlights: [
      "Complex curved brass horn crafted with smooth radial flow, hand-hammered relief, and subtle oxidation",
      "Multi-layered mahogany wood case with realistic organic grain depth, brass corner insets, and lacquer sheen",
      "1:1 matching wireframe topology comparison showing clean quad distribution across curved acoustic geometry",
      "Interactive studio gallery renders covering front, side, vinyl disc close-ups, and corner angles",
    ],
    textureBreakdown: [
      {
        name: "Hammered Brass Horn",
        resolution: "4096 x 4096",
        description: "Aged brass with micro-scratches, patina buildup in creases, and subtle anisotropic metallic sheen.",
      },
      {
        name: "Mahogany Wood Clearcoat",
        resolution: "4096 x 4096",
        description: "Deep red-brown wood grain topped with a reflective varnish roughness layer and subtle edge softening.",
      },
      {
        name: "Vinyl Record Grooves",
        resolution: "4096 x 4096",
        description: "Concentric micro-grooves with anisotropic specular reflections and center label wear.",
      },
      {
        name: "Mechanical Chrome & Needles",
        resolution: "4096 x 4096",
        description: "Polished reflective steel components with fine grease smudges and mechanical friction marks.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Historical Blueprints & Proportions",
        description:
          "Studied classical vintage phonograph schematics to establish true mechanical proportions, crank placement, and acoustic horn taper.",
        techniques: ["Reference Synthesis", "Proportion Blockout"],
      },
      {
        phase: "02",
        title: "Precision Radial Sub-D Modeling",
        description:
          "Constructed continuous quad flow along the expanding bell flare, tone arm, soundbox, and wood case bevels in Autodesk Maya.",
        techniques: ["Subdivision Modeling", "Radial Topology", "Seam Optimization"],
      },
      {
        phase: "03",
        title: "Tactile Antique PBR Texturing",
        description:
          "Authored multi-layered materials in Substance Painter featuring flaking varnish, oxidized brass crevices, and vinyl dust accumulation.",
        techniques: ["Substance Smart Masks", "Anisotropy Mapping", "Curvature Edge Wear"],
      },
      {
        phase: "04",
        title: "Studio Showcase & Cinematic Warmth",
        description:
          "Crafted warm studio strip lighting with soft rim reflections accentuating the horn curvature and wood lacquer depth.",
        techniques: ["Arnold Strip Softboxes", "Warm Temperature Key", "Depth of Field"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/vintage-gramophone/front-view.jpg",
        caption: "Frontal hero render capturing the majestic brass horn and rich wooden soundbox cabinet",
        label: "Front View",
      },
      {
        url: "/images/projects/vintage-gramophone/front-corner-view.jpg",
        caption: "Front 3/4 perspective emphasizing horn flare and turntable assembly",
        label: "Front Corner View",
      },
      {
        url: "/images/projects/vintage-gramophone/right-side-view.jpg",
        caption: "Right profile angle showcasing tone arm balance, soundbox, and winding crank",
        label: "Right Side View",
      },
      {
        url: "/images/projects/vintage-gramophone/side-view.jpg",
        caption: "Direct side perspective highlighting the graceful curve of the acoustic conduit",
        label: "Side View",
      },
      {
        url: "/images/projects/vintage-gramophone/cd-view.jpg",
        caption: "Macro focus on the vinyl record disc, platter velvet, and playback needle",
        label: "Vinyl Disc Close-up",
      },
      {
        url: "/images/projects/vintage-gramophone/corner-cd-view.jpg",
        caption: "Detailed corner perspective of the disc turntable with warm specular highlights",
        label: "Turntable Detail",
      },
    ],
  },
  {
    slug: "after-dark",
    title: "AFTER DARK",
    subtitle: "NIGHT HAS A NEW ADDRESS",
    category: "3D Environment / Architectural Visualization",
    filterCategory: "environments",
    featured: true,
    year: "2025",
    shortDescription:
      "An evocative, atmospheric speakeasy bar interior featuring mood lighting, weathered brick walls, neon signage, vintage beverage bottles, and rich wooden counter craftsmanship.",
    objective:
      "Craft a moody, immersive lounge environment that balances warm amber tungsten lighting, cool neon signage reflections, tactile wood finishes, and realistic glass refractions.",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer"],
    techniques: [
      "Modular Environment & Interior Arch-Viz Modeling",
      "PBR Glass Refraction & Beverage Shader Synthesis",
      "Atmospheric Volumetric Neon & Tungsten Lighting",
      "Detailed Prop Assembly (Glassware, Taps, Chillers)",
      "High-Fidelity Studio Depth-of-Field Cinematography",
    ],
    heroImage: "/images/projects/after-dark/front-closeup-angle.jpg",
    wireframeImage: "/images/projects/after-dark/front-closeup-wireframe.jpg",
    wireframeBeautyImage: "/images/projects/after-dark/front-closeup-angle.jpg",
    keyHighlights: [
      "Intimate cocktail lounge ambiance illuminated by glowing neon wall art and warm Edison bulbs",
      "Rich PBR material palette featuring polished mahogany bar tops, brushed steel sinks, and dusty brickwork",
      "1:1 matching wireframe topology comparison illustrating clean quad flow across architectural structures and furniture",
      "Expansive multi-shot render suite capturing panoramic wide angles, macro beverage bottles, and counter closeups",
    ],
    textureBreakdown: [
      {
        name: "Vintage Bottle Glass & Labels",
        resolution: "4096 x 4096",
        description:
          "Thin-walled refractive dielectric glass with realistic IOR, surface condensation, and micro-embossed paper labels.",
      },
      {
        name: "Polished Bar Countertop",
        resolution: "4096 x 4096",
        description:
          "Deep varnished timber with subtle drink ring stains, edge softening, and anisotropic specular reflections.",
      },
      {
        name: "Commercial Stainless Steel Sink & Taps",
        resolution: "4096 x 4096",
        description:
          "Brushed industrial metallic finish with water droplet normals and realistic specular roughness variations.",
      },
      {
        name: "Exposed Industrial Brick & Neon Glow",
        resolution: "4096 x 4096",
        description:
          "Rough masonry with mortar displacement maps responding naturally to colored neon tube emission falloff.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Architectural Layout & Spatial Blocking",
        description:
          "Established realistic interior scale and seating flow in Autodesk Maya, ensuring accurate bar counter ergonomics, stool heights, and ceiling clearance.",
        techniques: ["Spatial Ergonomics", "Architectural Scale", "Sub-D Modular Props"],
      },
      {
        phase: "02",
        title: "Prop Modeling & Bar Mechanics",
        description:
          "Modeled specialized bar assets including dual-tap beverage dispensers, back-bar bottle shelving, commercial under-counter fridges, and glassware.",
        techniques: ["Precision Prop Modeling", "Glass Lathe Geometry", "Hygienic Hardware"],
      },
      {
        phase: "03",
        title: "Atmospheric Substance PBR Texturing",
        description:
          "Textured diverse materials ranging from sticky varnished wood to cold refrigerator glass, brushed chrome taps, and worn leather barstools.",
        techniques: ["Smart Materials", "Liquid Glass Shading", "Surface Micro-Wear"],
      },
      {
        phase: "04",
        title: "Arnold Cinematic Lighting & Mood Staging",
        description:
          "Orchestrated layered lighting with warm tungsten key accents, cool atmospheric neon fills, and subtle volumetric haze for authentic nightlife mood.",
        techniques: ["Arnold Mesh Lights", "Volumetric Atmosphere", "Bokeh Depth of Field"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/after-dark/front-closeup-angle.jpg",
        caption: "Front closeup angle emphasizing the polished wooden bar counter, liquor bottle racks, and warm lighting",
        label: "Front Closeup Angle",
      },
      {
        url: "/images/projects/after-dark/front-wide-angle.jpg",
        caption: "Panoramic wide angle showing the full lounge interior, seating arrangements, and architectural flow",
        label: "Front Wide Angle",
      },
      {
        url: "/images/projects/after-dark/interior-view.jpg",
        caption: "Atmospheric perspective inside the bar highlighting mood lighting and intimate seating booths",
        label: "Interior Ambiance",
      },
      {
        url: "/images/projects/after-dark/bottle-view.jpg",
        caption: "Macro focus on assorted premium spirits bottles with transparent refractive liquid shaders",
        label: "Bottle Rack Detail",
      },
      {
        url: "/images/projects/after-dark/boys-adda-view.jpg",
        caption: "Feature wall neon signage casting vibrant colorful glows across the rustic interior textures",
        label: "Neon Feature Wall",
      },
      {
        url: "/images/projects/after-dark/fridge-view.jpg",
        caption: "Under-counter commercial beverage cooler with internal lighting and transparent door reflections",
        label: "Beverage Chiller",
      },
      {
        url: "/images/projects/after-dark/side-angle-closeup.jpg",
        caption: "Close perspective along the counter edge highlighting tactile wood grain and service taps",
        label: "Counter Service Angle",
      },
      {
        url: "/images/projects/after-dark/side-view-poster.jpg",
        caption: "Wall art and vintage cocktail posters framed against textured brickwork and warm sconce lights",
        label: "Wall Art & Brickwork",
      },
      {
        url: "/images/projects/after-dark/where-there-is-quatar.jpg",
        caption: "Detailed counter setup capturing coasters, glassware reflections, and subtle nightlife atmosphere",
        label: "Countertop Details",
      },
    ],
  },
  {
    slug: "thors-hammer",
    title: "THOR’S HAMMER",
    subtitle: "Mythical Mjolnir Prop & Asgardian Hard-Surface Craftsmanship",
    category: "3D Modeling / Texturing / Lighting",
    filterCategory: "modeling",
    featured: true,
    year: "2025",
    shortDescription:
      "A cinematic hero prop recreation of Thor’s legendary hammer Mjolnir, featuring etched Norse runes, weathered battle-forged steel, authentic wrapped leather grip, and atmospheric studio lighting.",
    objective:
      "Sculpt and render the iconic Asgardian war hammer with tactile realism—balancing heavy forged metal heft, authentic Nordic runic engravings, worn leather wrapping, and striking specular rim lighting.",
    software: ["Autodesk Maya", "Substance 3D Painter", "Arnold Renderer"],
    techniques: [
      "Precision Hard-Surface Subdivision Modeling",
      "PBR Weathered Steel & Micro-Abrasion Shading",
      "Organic Leather Strap & Grip Weaving",
      "Nordic Runic Inset Detailing",
      "Cinematic Three-Point Studio Lighting",
    ],
    heroImage: "/images/projects/thors-hammer/front-wide-view.jpg",
    wireframeImage: "/images/projects/thors-hammer/front-wide-wireframe.jpg",
    wireframeBeautyImage: "/images/projects/thors-hammer/front-wide-view.jpg",
    keyHighlights: [
      "Faithful cinematic proportions with distinct beveled hammerhead edges, Norse filigree, and inset side plates",
      "Battle-worn forged steel materials with microscopic pitting, micro-scratches, and subtle edge wear highlights",
      "1:1 matching wireframe topology comparison showing clean quad edge flow across intricate bevel transitions",
      "Detailed multi-angle studio renders covering wide frontal shots, macro handle closeups, top down, and corner angles",
    ],
    textureBreakdown: [
      {
        name: "Forged Asgardian Steel",
        resolution: "4096 x 4096",
        description:
          "Heavy forged metal with procedural micro-scratches, oxidation, edge chip curvature, and metallic specular highlights.",
      },
      {
        name: "Braided Leather Handle",
        resolution: "4096 x 4096",
        description:
          "Tactile brown leather bands with organic pore depth, seam stitching tension, and natural hand-rubbed wear.",
      },
      {
        name: "Engraved Side Grills",
        resolution: "4096 x 4096",
        description:
          "Recessed Nordic ornamental border patterns with subtle ambient occlusion shadowing and polished relief edges.",
      },
      {
        name: "Chrome Pommel & Wrist Strap",
        resolution: "4096 x 4096",
        description:
          "Polished end-cap metal with subtle grease patina and flexible reinforced leather wrist lanyard loop.",
      },
    ],
    processStages: [
      {
        phase: "01",
        title: "Proportion Studies & Maya Sub-D Blockout",
        description:
          "Established accurate silhouettes and scale in Autodesk Maya, modeling the primary head chamfers, handle tapering, and pommel assembly with clean quad topology.",
        techniques: ["Reference Alignment", "Chamfer Management", "Sub-D Poly Modeling"],
      },
      {
        phase: "02",
        title: "High-Poly Detailing & Runic Carvings",
        description:
          "Crafted intricate Nordic knotwork engravings and endplate relief motifs with crisp support loops, maintaining clean quad distribution across all complex bevels.",
        techniques: ["Support Loop Creasing", "Radial Symmetry", "Filigree Modeling"],
      },
      {
        phase: "03",
        title: "Multi-Layer PBR Texturing in Substance Painter",
        description:
          "Built tactile smart materials featuring raw uru-metal roughness, directional micro-scratches, edge discoloration, and authentic weathered leather wraps.",
        techniques: ["Smart Masks", "Curvature Driven Dirt", "Roughness Maps", "Normal Mapping"],
      },
      {
        phase: "04",
        title: "Arnold Cinematic Studio Lighting & Render",
        description:
          "Set up dramatic high-contrast studio softboxes with warm key and cool rim kickers, highlighting the metallic beveled edges and table surface reflections.",
        techniques: ["Arnold Area Lights", "Color Temperature Contrast", "Depth of Field"],
      },
    ],
    galleryImages: [
      {
        url: "/images/projects/thors-hammer/front-wide-view.jpg",
        caption: "Front wide perspective displaying Thor's Hammer resting on a polished studio surface with dramatic rim lighting",
        label: "Front Wide View",
      },
      {
        url: "/images/projects/thors-hammer/front-closeup-view.jpg",
        caption: "Front closeup emphasizing the intricate side plate engravings, beveled edges, and surface metal textures",
        label: "Front Closeup",
      },
      {
        url: "/images/projects/thors-hammer/front-handle-view.jpg",
        caption: "Close-up perspective focusing on the ribbed leather handle wrap, silver rings, and pommel connection",
        label: "Handle & Grip Detail",
      },
      {
        url: "/images/projects/thors-hammer/corner-view.jpg",
        caption: "Three-quarter isometric corner render showcasing the full 3D silhouette and depth of the hammer head",
        label: "Corner 3/4 View",
      },
      {
        url: "/images/projects/thors-hammer/upper-view.jpg",
        caption: "Top-down perspective capturing the top plate chamfers, surface roughness, and symmetrical form",
        label: "Upper View",
      },
    ],
  },
];
