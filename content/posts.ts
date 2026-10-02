export type OutfitCategory =
  | "Cute"
  | "Chic Witchy"
  | "Classic Horror"
  | "Villain Vibes"
  | "Movie-Inspired (Generic)"
  | "DIY / Closet";

export interface OutfitIdea {
  id: number;
  title: string;
  category: OutfitCategory;
  description: string;
  keyPieces: string[];
  accessories: string[];
  hairMakeup: string;
  stylingTip: string;
  image: {
    src: string;
    alt: string;
  };
  imagePrompt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PostSectionItem {
  name: string;
  description: string;
  stylingTip?: string;
  image?: string;
}

export interface PostSection {
  id: string;
  title: string;
  intro?: string;
  items?: PostSectionItem[];
  checklist?: string[];
  tips?: string[];
  faqs?: FAQItem[];
  paragraphs?: string[];
}

export interface Post {
  title: string;
  slug: string;
  date: string;
  updatedDate?: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured: boolean;
  category: 'Halloween' | 'Fall' | 'Winter';
  intro: string[];
  sections: PostSection[];
  outfits?: OutfitIdea[];
}

const negativePromptSuffix =
  ", 35mm photography, natural skin texture, subtle film grain, natural shadows, candid editorial, no cgi, no render, no illustration, no cartoon, no extra fingers, no deformed hands, no plastic skin, no watermark, no text, no logos";

export const halloweenOutfits: OutfitIdea[] = [
  {
    id: 1,
    title: "Modern Parisian Witch",
    category: "Chic Witchy",
    description: "A tailored, high-fashion take on the classic witch featuring minimalist silhouettes, Parisian tailoring, and quiet occult elegance.",
    keyPieces: ["black mock-neck midi dress", "sheer polka-dot tights", "pointed slingback kitten heels", "wide-brim felt fedora hat"],
    accessories: ["vintage faceted crystal pendant", "mini box leather clutch"],
    hairMakeup: "Sleek low chignon bun + deep matte berry lipstick.",
    stylingTip: "Add one antique-looking brass or crystal accessory for “witchy” mood without ever looking like a cheap costume.",
    image: { src: "/images/halloween/costume-01.jpg", alt: "Modern Parisian Witch Outfit" },
    imagePrompt: `Ultra-realistic street style photo at dusk on a cobblestone street, woman wearing black mock-neck midi dress, sheer polka-dot tights, pointed slingback kitten heels, wide-brim felt hat, deep berry lipstick, vintage crystal necklace, candid editorial${negativePromptSuffix}`
  },
  {
    id: 2,
    title: "Soft-Glam Vampire Muse",
    category: "Classic Horror",
    description: "Gothic romanticism meets modern red-carpet tailoring with a bias-cut black silk slip and a draped tuxedo cape.",
    keyPieces: ["black satin bias-cut slip dress", "tailored blazer cape", "20-denier sheer black tights", "pointed black stilettos"],
    accessories: ["multi-strand faux pearl choker", "deep oxblood patent clutch"],
    hairMakeup: "Undone Hollywood soft waves + blurred dark-red ombre lip stain.",
    stylingTip: "Keep the “vampire” cue entirely in the dark blurred lip and architectural cape rather than plastic fangs.",
    image: { src: "/images/halloween/costume-02.jpg", alt: "Soft-Glam Vampire Muse Costume" },
    imagePrompt: `Photoreal editorial indoor low light, woman in black satin slip dress with blazer-cape, candlelit ambience${negativePromptSuffix}`
  },
  {
    id: 3,
    title: "Coquette Black Swan",
    category: "Chic Witchy",
    description: "A delicate yet moody dark ballet aesthetic pairing structured boned corsetry with ethereal layered tulle.",
    keyPieces: ["black sweetheart corset top", "tiered matte tulle mini skirt", "sheer tights", "ribbon-tied leather ballet flats"],
    accessories: ["thin black velvet ribbon choker", "dainty satin hair bow"],
    hairMakeup: "Neat ballerina high bun + soft charcoal smudged cat-wing liner.",
    stylingTip: "Choose stiff matte tulle and zero sparkle sequins to keep the silhouette firmly in quiet-luxury territory.",
    image: { src: "/images/halloween/costume-03.jpg", alt: "Coquette Black Swan Costume" },
    imagePrompt: `Photoreal soft-shadow studio editorial, woman in black corset top and tiered tulle skirt, realistic fabric texture, minimal retouching${negativePromptSuffix}`
  },
  {
    id: 4,
    title: "Vintage Fortune Teller",
    category: "Chic Witchy",
    description: "Rich textures of crushed velvet and silk with bohemian gold talisman layering for an intimate parlor aesthetic.",
    keyPieces: ["flowy printed wrap skirt", "fitted black ribbed mock-neck top", "silk scarf belt", "pointed suede ankle boots"],
    accessories: ["layered hammered gold medallions", "vintage gemstone rings", "vintage tarot deck prop"],
    hairMakeup: "Tousled beach waves with center part + warm bronzy smoky eyes.",
    stylingTip: "Mix at least three contrasting textures like heavy knitwear, smooth silk, and supple suede.",
    image: { src: "/images/halloween/costume-04.jpg", alt: "Vintage Fortune Teller Costume" },
    imagePrompt: `Ultra-realistic café corner photo, warm window light, candid, woman holding a tarot card in bohemian chic attire${negativePromptSuffix}`
  },
  {
    id: 5,
    title: "Dark Academia Occult Librarian",
    category: "Chic Witchy",
    description: "An Ivy League archival look infused with mysterious gothic undertones and structured heritage tailoring.",
    keyPieces: ["heritage houndstooth wool blazer", "charcoal cashmere turtleneck", "pleated wool midi skirt", "chunky leather penny loafers"],
    accessories: ["round tortoiseshell glasses", "vintage leather book satchel", "black velvet hair ribbon"],
    hairMakeup: "Soft 90s bouncy blowout + muted plum satin lip.",
    stylingTip: "Add one mysterious occult element like an antique astrolabe brooch or black velvet choker.",
    image: { src: "/images/halloween/costume-05.jpg", alt: "Dark Academia Occult Librarian Costume" },
    imagePrompt: `Photoreal library aisle, natural tall window light, woman in houndstooth blazer and pleated skirt reading an antique book${negativePromptSuffix}`
  },
  {
    id: 6,
    title: "Wicked Garden Fairy (Modern)",
    category: "Chic Witchy",
    description: "An earthy, enchanted woodland mood translated into an effortlessly wearable slip dress with botanical botanical accents.",
    keyPieces: ["forest-black silk slip dress", "sheer botanical floral tights", "cropped mohair cardigan", "pointed ankle booties"],
    accessories: ["delicate brass ear cuff", "dark dried floral hairpin", "moss-green mini pouch"],
    hairMakeup: "Glossy textured mermaid waves + fresh berry-bitten lip stain.",
    stylingTip: "Keep wings strictly optional—delicate floral embroidery in the tights and hair jewelry conveys the fairy cue.",
    image: { src: "/images/halloween/costume-06.jpg", alt: "Wicked Garden Fairy Costume" },
    imagePrompt: `Photoreal outdoor botanical garden path, golden hour, candid street style fashion shot, dark fairy aesthetic${negativePromptSuffix}`
  },
  {
    id: 7,
    title: "Enchanted Raven Muse",
    category: "Chic Witchy",
    description: "Monochrome ebony drama anchored by an architectural trench and tactile feather-like texture.",
    keyPieces: ["black pleated accordion midi skirt", "fitted seamless bodysuit", "floor-sweeping wool duster coat", "patent boots"],
    accessories: ["feather-texture evening clutch", "sculptural jet-black drop earrings"],
    hairMakeup: "Ultra-sleek mirror ponytail + graphic smoky obsidian liner.",
    stylingTip: "A single dramatic floor-length duster coat makes this look instantly imposing and editorial.",
    image: { src: "/images/halloween/costume-07.jpg", alt: "Enchanted Raven Muse Costume" },
    imagePrompt: `Photoreal city street, overcast autumn daylight, woman in floor-sweeping black coat and pleated skirt, raven aesthetic${negativePromptSuffix}`
  },
  {
    id: 8,
    title: "Victorian Ghost (Elegant)",
    category: "Classic Horror",
    description: "Ethereal cream and ivory prairie lace layered with antique jewelry for an eerie yet romantic haunting vibe.",
    keyPieces: ["ivory high-neck ruffle blouse", "flowing ecru tiered maxi skirt", "lace wrist gloves", "cream leather lace-up boots"],
    accessories: ["antique portrait cameo choker", "small dried baby’s breath bouquet"],
    hairMakeup: "Loosely pinned Gibson girl updo with soft tendrils + pale rosy natural complexion.",
    stylingTip: "Pair with modern pointed leather boots rather than costume shoes to ground the silhouette.",
    image: { src: "/images/halloween/costume-08.jpg", alt: "Victorian Ghost Costume" },
    imagePrompt: `Photoreal vintage heritage hallway, soft diffused daylight, woman in ivory lace Victorian blouse with dried florals${negativePromptSuffix}`
  },
  {
    id: 9,
    title: "Midnight Black Cat (Fashion)",
    category: "Cute",
    description: "A cool-girl downtown model off-duty interpretation of the classic cat costume that feels 100% wearable streetwear.",
    keyPieces: ["black ribbed knit mock-neck mini dress", "oversized vintage leather biker jacket", "chunky lug-sole knee boots"],
    accessories: ["sharp acetate cat-eye sunglasses", "minimalist thin wire cat-ear headband"],
    hairMakeup: "Sharp liquid feline wing liner + clean nude satin gloss.",
    stylingTip: "Keep the cat ears tiny and structural—everything else should read as high-end Soho street style.",
    image: { src: "/images/halloween/costume-09.jpg", alt: "Midnight Black Cat Fashion Costume" },
    imagePrompt: `Photoreal Soho street style, daytime, candid photo of woman in leather jacket, mini dress, cat-eye sunglasses and subtle cat ears${negativePromptSuffix}`
  },
  {
    id: 10,
    title: "Spider Queen Corset Look",
    category: "Classic Horror",
    description: "Dark structural allure combining a boned velvet corset with delicate cobweb-like Chantilly lace.",
    keyPieces: ["structured boned corset top", "high-slit black maxi skirt", "sheer tights", "strappy pointed stiletto heels"],
    accessories: ["spider-web chantilly lace shawl", "stack of antique silver filigree rings"],
    hairMakeup: "Glass-hair slick center part + glossy obsidian black manicure.",
    stylingTip: "Introduce web motifs exclusively through intricate lace weaving rather than printed costume graphics.",
    image: { src: "/images/halloween/costume-10.jpg", alt: "Spider Queen Corset Look" },
    imagePrompt: `Photoreal moody indoor editorial portrait, woman in structured corset and lace shawl, dramatic natural shadows${negativePromptSuffix}`
  },
  {
    id: 11,
    title: "Chic Skeleton (Minimal)",
    category: "Classic Horror",
    description: "A minimalist monochrome mirror-selfie concept that plays with subtle skeletal bone patterns in hosiery.",
    keyPieces: ["long-sleeve bodycon black mini dress", "subtle bone-pattern sheer tights", "chunky leather ankle booties"],
    accessories: ["architectural silver hoops", "structured mini black leather shoulder bag"],
    hairMakeup: "Natural effortless waves + cool-toned ash grey smoky eyeshadow.",
    stylingTip: "Incorporate only one skeleton design element (the tights) to keep the overall look effortlessly polished.",
    image: { src: "/images/halloween/costume-11.jpg", alt: "Chic Skeleton Minimal Costume" },
    imagePrompt: `Photoreal mirror selfie in a stylish apartment, natural morning window light, woman in black mini dress with subtle bone-pattern tights${negativePromptSuffix}`
  },
  {
    id: 12,
    title: "Pumpkin Spice Chic",
    category: "Cute",
    description: "A rich monochromatic harvest palette of warm marigold, burnt amber, and chocolate leather.",
    keyPieces: ["burnt-orange ribbed turtleneck sweater dress", "cognac brown waist belt", "knee-high slouchy suede boots"],
    accessories: ["chunky gold tubular hoops", "mini leather pumpkin-shaped bag charm"],
    hairMakeup: "Soft brushed-out barrel curls + warm spiced terracotta lipstick.",
    stylingTip: "Work within a tonal gradient of orange to warm chocolate to capture pumpkin energy without dressing in orange felt.",
    image: { src: "/images/halloween/costume-12.jpg", alt: "Pumpkin Spice Chic Costume" },
    imagePrompt: `Photoreal autumn park surrounded by golden fall leaves, golden hour, woman in burnt-orange sweater dress and slouchy knee boots${negativePromptSuffix}`
  },
  {
    id: 13,
    title: "Candy Corn Color-Block",
    category: "Cute",
    description: "Playful modern high-street color blocking referencing white, yellow, and orange candy layers.",
    keyPieces: ["white chunky knit fisherman sweater", "mustard yellow pleated mini skirt", "warm orange knit cardigan", "retro white leather sneakers"],
    accessories: ["pastel tortoiseshell hair claw clip", "mini leather crossbody pouch"],
    hairMakeup: "High cheerful ponytail + soft peach cream blush and gloss.",
    stylingTip: "Keep each garment clean and timeless; let the nostalgic tri-color blocking do all the talking.",
    image: { src: "/images/halloween/costume-13.jpg", alt: "Candy Corn Color-Block Costume" },
    imagePrompt: `Photoreal daylight city street shot, candid, woman wearing white sweater, yellow pleated skirt, and orange cardigan${negativePromptSuffix}`
  },
  {
    id: 14,
    title: "Sweet Scarecrow (Modern)",
    category: "Cute",
    description: "Country-chic autumn casual wear upgraded with autumnal plaid, raw denim, and playful straw accents.",
    keyPieces: ["oversized flannel plaid shirt", "button-front denim midi skirt", "opaque brown tights", "lace-up leather heritage boots"],
    accessories: ["wide-brim woven straw hat", "braided rope belt"],
    hairMakeup: "Twin loose fishtail braids + warm cinnamon lipstick with a faint stitched eyeliner accent at cheek.",
    stylingTip: "A wide-brim straw hat and classic fall plaid deliver 90% of the scarecrow theme effortlessly.",
    image: { src: "/images/halloween/costume-14.jpg", alt: "Sweet Scarecrow Costume" },
    imagePrompt: `Photoreal rustic farm stand with pumpkins, golden hour, candid shot of woman in plaid shirt, straw hat, and fishtail braids${negativePromptSuffix}`
  },
  {
    id: 15,
    title: "Autumn Fairy (No Wings)",
    category: "Cute",
    description: "A whimsical, naturalistic aesthetic built on warm earth tones and gilded maple leaf jewelry.",
    keyPieces: ["olive green satin slip skirt", "cream alpaca wool knit sweater", "caramel ankle boots with stacked heel"],
    accessories: ["gilded brass maple leaf hair comb", "delicate layered amber crystal necklace"],
    hairMakeup: "Undone romantic waves + warm copper shimmer on eyelids.",
    stylingTip: "Substitute costume plastic wings for organic botanical hair accessories for a mature, elevated finish.",
    image: { src: "/images/halloween/costume-15.jpg", alt: "Autumn Fairy Costume" },
    imagePrompt: `Photoreal scenic park with vibrant red and yellow autumn trees, natural light, woman in olive satin skirt and cream knit${negativePromptSuffix}`
  },
  {
    id: 16,
    title: "Moon & Stars Sorceress",
    category: "Chic Witchy",
    description: "Deep midnight indigo luxury with shimmering celestial hardware that glints under evening lights.",
    keyPieces: ["midnight navy satin slip dress", "sheer shimmer tights", "pointed velvet ankle booties", "tailored black coat"],
    accessories: ["crystal celestial star hairpins", "sculptural crescent moon pendant necklace"],
    hairMakeup: "Glass-smooth straight hair + fine silver holographic eyeliner wing.",
    stylingTip: "Dainty celestial jewelry against deep midnight navy reads unmistakably magical without feeling theatrical.",
    image: { src: "/images/halloween/costume-16.jpg", alt: "Moon & Stars Sorceress Costume" },
    imagePrompt: `Photoreal night city street lights with soft bokeh, candid, woman in navy satin dress with celestial star hairpins${negativePromptSuffix}`
  },
  {
    id: 17,
    title: "Masquerade Mystery Girl",
    category: "Movie-Inspired (Generic)",
    description: "Venetian ball elegance made modern with tailored outerwear and an intricately cut filigree eye mask.",
    keyPieces: ["classic little black dress", "double-faced tailored wool trench coat", "pointed slingback heels"],
    accessories: ["laser-cut black lace Venetian eye mask", "single-drop freshwater pearl earrings"],
    hairMakeup: "Sleek low bun with hair oil sheen + classic matte crimson lipstick.",
    stylingTip: "Choose a delicate half-mask that fits comfortably across the brow bone rather than covering the whole face.",
    image: { src: "/images/halloween/costume-17.jpg", alt: "Masquerade Mystery Girl Costume" },
    imagePrompt: `Photoreal evening brownstone doorway shot, woman wearing tailored black coat, red lipstick, and delicate lace eye mask${negativePromptSuffix}`
  },
  {
    id: 18,
    title: "Haunted Doll (High-Fashion)",
    category: "Villain Vibes",
    description: "Porcelain doll aesthetics reimagined through an avant-garde coquette lens with puff sleeves and patent leather.",
    keyPieces: ["puff-sleeve babydoll mini dress", "opaque white tights", "chunky platform Mary Jane pumps"],
    accessories: ["oversized satin ribbon headband", "structured mini vintage vanity box handbag"],
    hairMakeup: "Curled doll ringlets + high-set flushed peach blush and glassy rosebud lip.",
    stylingTip: "Keep the makeup soft and modern to avoid the costume slipping into uncanny territory.",
    image: { src: "/images/halloween/costume-18.jpg", alt: "Haunted Doll High-Fashion Costume" },
    imagePrompt: `Photoreal indoor daylight studio, woman wearing puff-sleeve babydoll dress, white tights, and platform Mary Janes${negativePromptSuffix}`
  },
  {
    id: 19,
    title: "Zombie Prom Queen (Glam)",
    category: "Classic Horror",
    description: "Glamorous ruined elegance featuring a satin cocktail dress, sparkling tiara, and artfully undone styling.",
    keyPieces: ["rose gold or emerald satin mini dress", "draped faux-fur stole", "strappy metallic heels"],
    accessories: ["vintage rhinestone tiara", "blank blank silk sash (unbranded)"],
    hairMakeup: "Tousled, slightly unpinned updo + heavy smudged charcoal smoky eye.",
    stylingTip: "Distress your hair and smoky eye makeup while keeping the satin dress pristine for wearable party glam.",
    image: { src: "/images/halloween/costume-19.jpg", alt: "Zombie Prom Queen Glam Costume" },
    imagePrompt: `Photoreal party nightlife flash photography aesthetic, slight motion blur, woman in satin cocktail dress with tiara and smudged eyeliner${negativePromptSuffix}`
  },
  {
    id: 20,
    title: "Witchy Biker Girl",
    category: "Villain Vibes",
    description: "Street-smart attitude merging heavy motorcycle leather with occult silver chains and pointed silhouettes.",
    keyPieces: ["heavy black leather moto jacket", "ribbed black mini skirt", "chunky lug-sole motorcycle boots", "sheer tights"],
    accessories: ["heavy chunky silver chain choker", "black tourmaline crystal ring", "matte black nails"],
    hairMakeup: "Pin-straight parted hair + dark grunge liquid eyeliner.",
    stylingTip: "Incorporate one distinct witch cue like a crescent moon pendant or pointed brim hat to contrast the motorcycle leather.",
    image: { src: "/images/halloween/costume-20.jpg", alt: "Witchy Biker Girl Costume" },
    imagePrompt: `Photoreal urban gritty alleyway, natural night street lamp shadows, woman in distressed leather moto jacket and chunky boots${negativePromptSuffix}`
  },
  {
    id: 21,
    title: "Retro Disco Devil (Fashion)",
    category: "Villain Vibes",
    description: "High-octane Studio 54 glamour channeling devilish red sequins and glossy modern tailoring.",
    keyPieces: ["crimson red sequin mini dress", "sheer black stockings", "pointed platform ankle-strap heels"],
    accessories: ["minimalist sculptural red horn headband", "thick chunky gold hoop earrings"],
    hairMakeup: "Voluminous 70s layered blowout + high-gloss lacquered red lip.",
    stylingTip: "Keep the horns tiny and modern; allow the shimmering red sequins to command the devilish theme.",
    image: { src: "/images/halloween/costume-21.jpg", alt: "Retro Disco Devil Costume" },
    imagePrompt: `Photoreal nightclub flash aesthetic, woman in crimson red sequin dress with minimal chic red horns and 70s blowout${negativePromptSuffix}`
  },
  {
    id: 22,
    title: "Fallen Angel (Neutral)",
    category: "Classic Horror",
    description: "Subdued, melancholic editorial fashion using oatmeals, brushed creams, and soft charcoal textures.",
    keyPieces: ["cream silk slip dress", "oversized distressed beige wool coat", "chunky bone-white leather boots"],
    accessories: ["delicate brass wire halo headband", "subtle feather cuff bracelet"],
    hairMakeup: "Soft textured undone waves + luminous dewy glass skin with nude lip.",
    stylingTip: "A monochrome neutral cream palette feels high-fashion and expensive rather than theatrical.",
    image: { src: "/images/halloween/costume-22.jpg", alt: "Fallen Angel Neutral Costume" },
    imagePrompt: `Photoreal soft natural light studio, woman in cream slip dress with wire halo headband, serene and editorial${negativePromptSuffix}`
  },
  {
    id: 23,
    title: "Dark Ringmaster (Circus)",
    category: "Villain Vibes",
    description: "Tailored theatrical dominance with structured military shoulders, brass buttons, and equestrian boots.",
    keyPieces: ["tailored crimson or black military blazer", "boned corset belt", "pleated black mini skirt", "knee-high riding boots"],
    accessories: ["mini tilted felt top hat", "vintage brass pocket watch chain"],
    hairMakeup: "Sleek high ponytail + exaggerated sharp winged cat eye.",
    stylingTip: "Sharp razor tailoring makes this concept look like runway Alexander McQueen rather than a circus costume.",
    image: { src: "/images/halloween/costume-23.jpg", alt: "Dark Ringmaster Circus Costume" },
    imagePrompt: `Photoreal moody indoor lounge, woman wearing structured military blazer with brass buttons and knee-high riding boots${negativePromptSuffix}`
  },
  {
    id: 24,
    title: "Creepy Clown Chic (Subtle)",
    category: "Villain Vibes",
    description: "Harlequin graphics made runway-ready with monochrome stripes, a pop of crimson, and sharp graphic liner.",
    keyPieces: ["black-and-white horizontal striped top", "high-waisted black A-line skirt", "lace-up platform combat boots"],
    accessories: ["pop-red leather shoulder bag", "detachable pleated ruffle neck collar"],
    hairMakeup: "High pigtail buns + sharp graphic triangle eye detail and deep berry pout.",
    stylingTip: "Skip full face paint entirely; translate clown motifs through monochrome stripes and a single red accessory.",
    image: { src: "/images/halloween/costume-24.jpg", alt: "Creepy Clown Chic Costume" },
    imagePrompt: `Photoreal overcast city sidewalk, woman in black and white striped top, pleated skirt, with subtle editorial graphic eye makeup${negativePromptSuffix}`
  },
  {
    id: 25,
    title: "Gothic Romance Bride",
    category: "Classic Horror",
    description: "An intoxicating mix of dark Victorian lace, a short birdcage veil, and brooding romantic florals.",
    keyPieces: ["black scalloped lace midi dress", "short black tulle birdcage veil", "pointed patent leather heels"],
    accessories: ["bouquet of dried black roses and thistle", "black crystal drop earrings"],
    hairMakeup: "Intricately pinned low romantic updo + velvety deep mauve-berry lipstick.",
    stylingTip: "A modern short birdcage veil reads instantly as bride without requiring a trailing train.",
    image: { src: "/images/halloween/costume-25.jpg", alt: "Gothic Romance Bride Costume" },
    imagePrompt: `Photoreal moody vintage conservatory, woman wearing black lace dress with short black veil holding dried dark roses${negativePromptSuffix}`
  },
  {
    id: 26,
    title: "90s Grunge Witch",
    category: "DIY / Closet",
    description: "The ultimate closet-staple costume inspired by 90s cult supernatural cinema using cozy layered streetwear.",
    keyPieces: ["black floral silk slip dress", "distressed oversized flannel shirt", "heavy Dr. Martens combat boots", "sheer tights"],
    accessories: ["tattoo-style or velvet ribbon choker", "stack of silver midi rings"],
    hairMakeup: "Messy, uncombed air-dried texture + smudged kohl eyeliner rimming the waterline.",
    stylingTip: "Layer existing basics directly from your closet; no costume purchases required.",
    image: { src: "/images/halloween/costume-26.jpg", alt: "90s Grunge Witch Costume" },
    imagePrompt: `Photoreal mirror selfie in a casual bedroom, natural light, woman in flannel shirt over slip dress with combat boots and choker${negativePromptSuffix}`
  },
  {
    id: 27,
    title: "Noir Detective (Halloween)",
    category: "Movie-Inspired (Generic)",
    description: "Classic 1940s private eye mystery with a belted double-breasted trench and fedora silhouette.",
    keyPieces: ["heavy khaki wool trench coat", "black fine-knit turtleneck", "tailored charcoal trousers", "leather penny loafers"],
    accessories: ["wool felt fedora hat", "leather-bound reporter notebook prop"],
    hairMakeup: "Sleek polished waves + matte neutral brown 90s lip.",
    stylingTip: "A belted trench coat and a tilted fedora convey the classic gumshoe persona in seconds.",
    image: { src: "/images/halloween/costume-27.jpg", alt: "Noir Detective Costume" },
    imagePrompt: `Photoreal misty rainy city street, cinematic street light reflections, woman in classic belted trench coat and fedora holding an umbrella${negativePromptSuffix}`
  },
  {
    id: 28,
    title: "Retro Space Explorer",
    category: "Movie-Inspired (Generic)",
    description: "Y2K metallic futurism blended with clean athletic streetwear for a stylish sci-fi look.",
    keyPieces: ["metallic silver cropped bomber jacket", "sleek black zip-up bodysuit", "chunky platform snow boots"],
    accessories: ["frameless silver mirror sunglasses", "metallic silver crescent shoulder bag"],
    hairMakeup: "High slicked samurai bun + glossy holographic lip.",
    stylingTip: "Focus on metallic silver streetwear separates rather than an uncomfortable plastic space suit.",
    image: { src: "/images/halloween/costume-28.jpg", alt: "Retro Space Explorer Costume" },
    imagePrompt: `Photoreal urban neon night, editorial street style, woman in metallic silver bomber jacket and futuristic mirror sunglasses${negativePromptSuffix}`
  },
  {
    id: 29,
    title: "Cyberpunk Villain (Wearable)",
    category: "Villain Vibes",
    description: "Tech-wear street edge with tactical pockets, leather harnesses, and sharp geometric accessories.",
    keyPieces: ["black tactical wide-leg cargo pants", "ribbed asymmetrical cutout top", "cropped leather jacket", "chunky combat boots"],
    accessories: ["futuristic visor sunglasses", "industrial silver carabiner chain"],
    hairMakeup: "Graphic floating eyeliner wings + wet-finish lip gloss.",
    stylingTip: "One sculptural futuristic accessory anchors the entire sci-fi antagonist vibe.",
    image: { src: "/images/halloween/costume-29.jpg", alt: "Cyberpunk Villain Costume" },
    imagePrompt: `Photoreal wet neon-lit city crosswalk, cinematic night, woman in black cargo pants and cropped leather jacket with visor glasses${negativePromptSuffix}`
  },
  {
    id: 30,
    title: "Storybook Evil Queen (Modern)",
    category: "Villain Vibes",
    description: "Regal cruelty brought into modern couture with structured shoulders and an imposing cape coat.",
    keyPieces: ["sculptural black column dress", "dramatic wool cape coat", "pointed black velvet pumps"],
    accessories: ["minimalist geometric crown headband", "oversized emerald statement earrings"],
    hairMakeup: "Severe sleek center-part low bun + classic velvety blood-red lip.",
    stylingTip: "Invest in a tailored cape coat to elevate the queen concept into high fashion.",
    image: { src: "/images/halloween/costume-30.jpg", alt: "Storybook Evil Queen Costume" },
    imagePrompt: `Photoreal editorial indoor palace hallway, dramatic architectural shadows, woman in black cape coat and minimal gold crown${negativePromptSuffix}`
  },
  {
    id: 31,
    title: "Underworld Goddess (Black & Gold)",
    category: "Chic Witchy",
    description: "Mythological Greek underworld deity draped in liquid black satin and polished hammered gold.",
    keyPieces: ["black liquid satin cowl-neck maxi dress", "hammered gold metal belt", "minimalist gold strappy heels"],
    accessories: ["wide gold arm cuffs", "gold laurel leaf hairband", "dark evening clutch"],
    hairMakeup: "Textured wet-look waves + warm bronze smoky eye with gold inner corner highlight.",
    stylingTip: "Use polished metallic gold accessories against jet black to channel mythic underworld majesty.",
    image: { src: "/images/halloween/costume-31.jpg", alt: "Underworld Goddess Costume" },
    imagePrompt: `Photoreal low-light editorial portrait, woman in liquid black cowl dress with gold laurel headband and cuffs${negativePromptSuffix}`
  },
  {
    id: 32,
    title: "Cursed Ballerina",
    category: "Classic Horror",
    description: "The eerie elegance of a studio rehearsal gone wrong with soft ballerina pink contrasted against dark tulle.",
    keyPieces: ["blush pink knit wrap cardigan", "black tiered tulle skirt", "satin ballet flats with ankle ribbons", "sheer tights"],
    accessories: ["distressed satin hair ribbon", "dainty vintage pearl studs"],
    hairMakeup: "Messy, unraveled rehearsal bun + smudged rosewood blush trailing toward temples.",
    stylingTip: "A wrap cardigan and tulle midi skirt reads unmistakably as ballet without wearing a rigid tutu.",
    image: { src: "/images/halloween/costume-32.jpg", alt: "Cursed Ballerina Costume" },
    imagePrompt: `Photoreal dance studio with wooden floors, soft window daylight, woman in pink wrap cardigan and black tulle skirt${negativePromptSuffix}`
  },
  {
    id: 33,
    title: "“Bad Cartoon Girl” Graphic Chic (Generic)",
    category: "Movie-Inspired (Generic)",
    description: "Bold cartoon attitude rendered as modern punk streetwear with graphic silhouettes and chunky boots.",
    keyPieces: ["black fitted cutout mini dress", "oversized distressed leather jacket", "knee-high chunky platform boots"],
    accessories: ["bold enamel hair clips", "chunky silver chain-link bracelet"],
    hairMakeup: "Exaggerated graphic liquid wing liner + glossy peach-nude lip.",
    stylingTip: "Rely on rebellious styling and attitude rather than literal cartoon costume pieces.",
    image: { src: "/images/halloween/costume-33.jpg", alt: "Bad Cartoon Girl Graphic Chic Costume" },
    imagePrompt: `Photoreal downtown street style, direct flash aesthetic, woman in leather jacket, mini dress, with graphic bold eyeliner${negativePromptSuffix}`
  },
  {
    id: 34,
    title: "“Antihero in Red & Black” (Generic)",
    category: "Movie-Inspired (Generic)",
    description: "Sleek comic-book vigilante aesthetics translated into a razor-sharp red bodysuit and black blazer.",
    keyPieces: ["crimson red mock-neck bodysuit", "tailored black oversized blazer", "black faux-leather mini skirt", "heeled booties"],
    accessories: ["touchscreen leather driving gloves", "minimalist black eyemask prop"],
    hairMakeup: "Ultra-sleek high ponytail + bold matte ruby lip.",
    stylingTip: "Let an oversized black tailored blazer anchor the bright red bodysuit for wearable fashion.",
    image: { src: "/images/halloween/costume-34.jpg", alt: "Antihero in Red & Black Costume" },
    imagePrompt: `Photoreal urban rooftop at night, cinematic skyline lights, woman in red bodysuit under tailored black blazer with sleek ponytail${negativePromptSuffix}`
  },
  {
    id: 35,
    title: "Femme Pirate Captain",
    category: "Movie-Inspired (Generic)",
    description: "High-seas swashbuckler romance with voluminous peasant sleeves, leather corsetry, and boots.",
    keyPieces: ["billowy ivory poet ruffle blouse", "wide lace-up underbust corset belt", "fitted black trousers", "knee-high leather boots"],
    accessories: ["oversized hammered gold hoop earrings", "printed silk bandana hair scarf"],
    hairMakeup: "Textured sea-salt waves + sun-kissed bronzer with warm nude lips.",
    stylingTip: "A wide leather corset belt cinched over a loose poet blouse instantly delivers the pirate captain silhouette.",
    image: { src: "/images/halloween/costume-35.jpg", alt: "Femme Pirate Captain Costume" },
    imagePrompt: `Photoreal seaside boardwalk during golden hour, woman in white poet blouse, leather corset belt, and bandana in hair${negativePromptSuffix}`
  },
  {
    id: 36,
    title: "Haunted School Uniform (Modern)",
    category: "Classic Horror",
    description: "Subversive prep aesthetics with monochrome plaid, knitwear, and vintage school accessories.",
    keyPieces: ["monochrome grey pleated skirt", "fitted black button-down cardigan", "sheer black tights", "chunky platform loafers with white socks"],
    accessories: ["black satin ribbon neck tie", "vintage mini leather backpack"],
    hairMakeup: "Half-up half-down loose hair + diffused smoky kohl eyes.",
    stylingTip: "Keep the color palette entirely grey, black, and white for an eerie gothic schoolgirl twist.",
    image: { src: "/images/halloween/costume-36.jpg", alt: "Haunted School Uniform Costume" },
    imagePrompt: `Photoreal old stone university stairwell, overcast daylight, woman in pleated grey skirt, cardigan, and chunky platform loafers${negativePromptSuffix}`
  },
  {
    id: 37,
    title: "Shadow Assassin (Generic)",
    category: "Villain Vibes",
    description: "Tactical stealth elegance using sleek moisture-wicking fabrics and a dramatic sweeping duster.",
    keyPieces: ["fitted black compression top", "high-waisted black tailored trousers", "floor-length black duster coat", "lug-sole combat boots"],
    accessories: ["black leather gloves", "minimalist black face covering prop"],
    hairMakeup: "Slick low braided bun + sharp razor cheekbone contour.",
    stylingTip: "A long flowing coat combined with sleek leather gloves conveys deadly elegance without fake weapons.",
    image: { src: "/images/halloween/costume-37.jpg", alt: "Shadow Assassin Costume" },
    imagePrompt: `Photoreal night street, dramatic cinematic shadows, woman in long black duster coat and leather gloves looking over shoulder${negativePromptSuffix}`
  },
  {
    id: 38,
    title: "Elegant Mummy (No Wraps)",
    category: "DIY / Closet",
    description: "A sophisticated neutral interpretation of the mummy motif using ribbed oatmeal knits and gauze draping.",
    keyPieces: ["beige ribbed bodycon midi dress", "oversized unlined trench coat in sand", "nude pointed kitten heels"],
    accessories: ["single sheer gauze scarf draped across shoulder", "stack of antique gold bangles"],
    hairMakeup: "Sleek low ponytail + sun-baked bronze eyeshadow.",
    stylingTip: "Incorporate a single frayed gauze scarf rather than wrapping yourself in real bandages.",
    image: { src: "/images/halloween/costume-38.jpg", alt: "Elegant Mummy Costume" },
    imagePrompt: `Photoreal minimalist warm studio, natural daylight, woman wearing beige bodycon knit dress with sheer draped gauze scarf${negativePromptSuffix}`
  },
  {
    id: 39,
    title: "Newspaper Ghost (DIY Fashion)",
    category: "DIY / Closet",
    description: "An effortless intellectual ghost concept built on crisp white tailoring and a vintage newspaper prop.",
    keyPieces: ["oversized crisp white poplin shirt dress", "light stone trench coat", "clean white leather sneakers or ankle boots"],
    accessories: ["folded vintage newspaper prop", "black retro oval sunglasses"],
    hairMakeup: "Deliberately messy undone bedhead waves + minimal clean makeup.",
    stylingTip: "Hold a folded vintage broadsheet newspaper as your prop instead of wearing printed newspaper pattern fabric.",
    image: { src: "/images/halloween/costume-39.jpg", alt: "Newspaper Ghost Costume" },
    imagePrompt: `Photoreal candid city crosswalk, daytime, woman in white shirt dress and light trench holding an antique newspaper${negativePromptSuffix}`
  },
  {
    id: 40,
    title: "Spellbook Student (Dark Academia)",
    category: "Chic Witchy",
    description: "Old-world sorcery scholar featuring cable-knit vests, collegiate plaids, and leather satchels.",
    keyPieces: ["cream cable-knit sweater vest", "crisp white collared shirt", "hunter green plaid skirt", "leather oxford brogues"],
    accessories: ["black grosgrain neck ribbon", "structured leather tote bag"],
    hairMakeup: "Soft bouncy curls + satin rosy tinted lip balm.",
    stylingTip: "A simple black grosgrain ribbon tied at the collar creates an instant magic academy school uniform vibe.",
    image: { src: "/images/halloween/costume-40.jpg", alt: "Spellbook Student Costume" },
    imagePrompt: `Photoreal historic campus walkway, autumn foliage on ground, overcast, woman wearing cable knit vest and plaid skirt${negativePromptSuffix}`
  },
  {
    id: 41,
    title: "Batwing Cape Minimalist",
    category: "Chic Witchy",
    description: "Pure sculptural silhouette where an architectural cape transforms basic black essentials into high fashion.",
    keyPieces: ["fitted all-black turtleneck bodysuit", "tailored black cigarette pants", "flowy batwing cape jacket", "pointed booties"],
    accessories: ["architectural silver huggie earrings", "matte black stiletto nails"],
    hairMakeup: "Mirror-shine straight bob + clean cat-eye liquid liner.",
    stylingTip: "Throwing a batwing cape coat over everyday basics delivers instant high-impact costume energy.",
    image: { src: "/images/halloween/costume-41.jpg", alt: "Batwing Cape Minimalist Costume" },
    imagePrompt: `Photoreal dusk street style, streetlamps just turning on, woman in black batwing cape coat and tailored pants${negativePromptSuffix}`
  },
  {
    id: 42,
    title: "“Bad Nurse” Aesthetic (Generic, Fashion)",
    category: "Villain Vibes",
    description: "A clean, retro-tailored editorial look focusing on stark clinical white paired with vibrant red accents.",
    keyPieces: ["structured white tailored mini blazer dress", "opaque white tights", "chunky white pointed boots"],
    accessories: ["vintage red leather top-handle bag", "dainty white retro nurse headband (minimal)"],
    hairMakeup: "Sleek high ponytail + power red lipstick.",
    stylingTip: "Keep the silhouette tailored and minimalist; avoid realistic medical props or cheesy red cross badges.",
    image: { src: "/images/halloween/costume-42.jpg", alt: "Bad Nurse Aesthetic Costume" },
    imagePrompt: `Photoreal indoor modern art gallery hallway, woman in structured white blazer dress with sleek ponytail and bold red lipstick${negativePromptSuffix}`
  },
  {
    id: 43,
    title: "Haunted Bride (Ivory + Black)",
    category: "Classic Horror",
    description: "A stark high-contrast wedding look combining bridal ivory with an imposing black winter coat.",
    keyPieces: ["ivory satin lace midi dress", "heavy double-breasted black wool coat", "lace-up black leather booties"],
    accessories: ["short ivory tulle veil", "bouquet of withered dried blooms"],
    hairMakeup: "Soft romantic waves + cool-toned smoky eyes with muted berry lips.",
    stylingTip: "The jarring visual contrast between bridal ivory and a heavy black wool coat creates instant eerie intrigue.",
    image: { src: "/images/halloween/costume-43.jpg", alt: "Haunted Bride Ivory and Black Costume" },
    imagePrompt: `Photoreal moody vintage manor courtyard, woman in ivory lace dress with heavy black wool coat draped over shoulders${negativePromptSuffix}`
  },
  {
    id: 44,
    title: "Ice Queen (Fashion Winter)",
    category: "Movie-Inspired (Generic)",
    description: "Monochromatic glacial elegance using soft powder blues, winter whites, and shimmering crystal facets.",
    keyPieces: ["powder blue ribbed sweater dress", "oversized ivory cocoon wool coat", "bone-white knee-high boots"],
    accessories: ["faceted crystal chandelier earrings", "metallic silver evening clutch"],
    hairMakeup: "Ice-blonde or glossy dark sleek hair + frosty silver shimmer on inner eyelids and high cheekbones.",
    stylingTip: "Monochromatic icy pastels and winter whites feel instantly frosty and regal without needing a plastic tiara.",
    image: { src: "/images/halloween/costume-44.jpg", alt: "Ice Queen Costume" },
    imagePrompt: `Photoreal snowy city boulevard, overcast crisp winter day, woman in powder blue knit dress and ivory cocoon coat${negativePromptSuffix}`
  },
  {
    id: 45,
    title: "Fire Queen (Red + Gold)",
    category: "Villain Vibes",
    description: "Warm, incendiary drama featuring saturated red tones, metallic brass, and voluminous evening styling.",
    keyPieces: ["crimson red cowl-neck satin slip dress", "metallic gold snake belt", "pointed metallic heels"],
    accessories: ["stacked polished gold arm cuffs", "sculptural sunburst drop earrings"],
    hairMakeup: "Voluminous loose curls + warm copper smoky eye with brick red satin lips.",
    stylingTip: "Warm polished gold hardware against radiant crimson evokes fire effortlessly without tacky flames.",
    image: { src: "/images/halloween/costume-45.jpg", alt: "Fire Queen Costume" },
    imagePrompt: `Photoreal warm candlelit restaurant interior, woman in crimson red satin slip dress with gold belt and statement earrings${negativePromptSuffix}`
  },
  {
    id: 46,
    title: "Storm Sorceress (Grey Tones)",
    category: "Chic Witchy",
    description: "Moody tempest vibes with storm-cloud greys, patent leathers, and rainy city street props.",
    keyPieces: ["charcoal grey wool longline coat", "black knit mock-neck mini dress", "knee-high black patent rain boots"],
    accessories: ["silver chain necklace with storm pendant", "sleek black windproof umbrella"],
    hairMakeup: "Textured wet-look styled hair + moody storm-grey smoky eye.",
    stylingTip: "Incorporate authentic weather accessories like a sleek black umbrella to build atmospheric storm drama.",
    image: { src: "/images/halloween/costume-46.jpg", alt: "Storm Sorceress Costume" },
    imagePrompt: `Photoreal rainy city street at dusk, wet pavement reflections, woman holding black umbrella in charcoal grey coat${negativePromptSuffix}`
  },
  {
    id: 47,
    title: "Poison Garden Villain (Green & Black)",
    category: "Villain Vibes",
    description: "Deadly botanical allure pairing rich emerald jewel tones with sleek black leather.",
    keyPieces: ["emerald green satin cowl top", "high-waisted black wide-leg trousers", "pointed black stiletto booties"],
    accessories: ["serpentine snake chain necklace", "dark forest green glossy manicure"],
    hairMakeup: "Sleek straight center part + dark emerald green accent cat-eye liner.",
    stylingTip: "A single rich emerald green satin garment against jet black is all you need to signal botanical villainy.",
    image: { src: "/images/halloween/costume-47.jpg", alt: "Poison Garden Villain Costume" },
    imagePrompt: `Photoreal greenhouse botanical conservatory, soft natural light, woman in emerald green satin top and black trousers${negativePromptSuffix}`
  },
  {
    id: 48,
    title: "Retro 1920s Speakeasy Vamp",
    category: "Classic Horror",
    description: "Roaring twenties decadence combined with dark vampiric undertones and tactile fringe movement.",
    keyPieces: ["black fringed flapper-style midi dress", "sheer patterned black tights", "pointed T-strap kitten heels"],
    accessories: ["beaded art deco headband", "long knotted freshwater pearl necklace"],
    hairMakeup: "Vintage finger-wave hairstyle + deep dark berry-wine lipstick.",
    stylingTip: "Tactile fringe provides instant 1920s recognition, while the dark berry lipstick delivers vampire drama.",
    image: { src: "/images/halloween/costume-48.jpg", alt: "Retro 1920s Speakeasy Vamp Costume" },
    imagePrompt: `Photoreal low-light speakeasy bar, warm amber backlighting, woman in black fringe dress with finger waves and dark lipstick${negativePromptSuffix}`
  },
  {
    id: 49,
    title: "“Bad Cheer Captain” (Generic)",
    category: "Movie-Inspired (Generic)",
    description: "Subversive varsity aesthetic remixing a pleated cheer skirt with an oversized leather letterman jacket.",
    keyPieces: ["black pleated athletic mini skirt", "fitted black baby tee", "oversized black-and-white varsity jacket", "chunky retro sneakers with tube socks"],
    accessories: ["black satin cheer hair bow", "chunky silver chain necklace"],
    hairMakeup: "Sleek high perky ponytail + bold graphic black wing liner and glossy lip.",
    stylingTip: "Keep the varsity palette strictly black and white to give traditional cheer uniforms an edgy, rebellious twist.",
    image: { src: "/images/halloween/costume-49.jpg", alt: "Bad Cheer Captain Costume" },
    imagePrompt: `Photoreal outdoor sports bleachers during autumn afternoon, woman in black pleated skirt, varsity jacket, and high ponytail${negativePromptSuffix}`
  },
  {
    id: 50,
    title: "Elegant Werewolf Night Out (No Ears)",
    category: "Classic Horror",
    description: "Wild nocturnal luxury pairing an oversized textured faux-fur coat with claw-like jewelry and smokey makeup.",
    keyPieces: ["oversized textured shaggy faux-fur coat", "black ribbed knit mini dress", "chunky platform combat boots"],
    accessories: ["sculptural claw-shaped silver rings", "stack of chunky ear cuffs"],
    hairMakeup: "Voluminous messy teased bedhead hair + heavy bronze and charcoal smoky eye.",
    stylingTip: "An oversized shaggy faux-fur coat delivers all the werewolf mood you need with zero fake ears or masks.",
    image: { src: "/images/halloween/costume-50.jpg", alt: "Elegant Werewolf Night Out Costume" },
    imagePrompt: `Photoreal night city street, cinematic street light flare, woman in oversized faux-fur coat with textured voluminous hair${negativePromptSuffix}`
  },
  {
    id: 51,
    title: "“Bad Scientist” Cartoon Vibe (Generic)",
    category: "Movie-Inspired (Generic)",
    description: "Futuristic lab aesthetic taking a crisp white blazer and electrifying it with acid-green neon accents.",
    keyPieces: ["oversized crisp white tailored blazer", "black mock-neck mini dress", "chunky black knee-high boots"],
    accessories: ["oversized clear optical glasses", "neon-green structured mini pouch"],
    hairMakeup: "Slicked-back high bun + sharp neon or black graphic eyeliner.",
    stylingTip: "A single shock of acid neon against a laboratory-white tailored blazer delivers mad scientist energy.",
    image: { src: "/images/halloween/costume-51.jpg", alt: "Bad Scientist Cartoon Vibe Costume" },
    imagePrompt: `Photoreal modern architectural minimalist white corridor, woman in oversized white blazer with clear glasses and neon pouch${negativePromptSuffix}`
  },
  {
    id: 52,
    title: "Slasher Chic (Generic, Minimal Mask)",
    category: "Villain Vibes",
    description: "Gritty 90s streetwear horror featuring an oversized fleece hoodie, raw hem skirt, and handheld prop.",
    keyPieces: ["oversized faded black fleece hoodie", "black mini skirt", "chunky lug-sole ankle boots", "long trench coat"],
    accessories: ["minimalist blank white mask held casually in hand", "touchscreen leather driving gloves"],
    hairMakeup: "Tousled messy hair slipping from hood + smudged grunge kohl eyeliner.",
    stylingTip: "Hold the mask casually in your hand for photos rather than wearing it over your face all night.",
    image: { src: "/images/halloween/costume-52.jpg", alt: "Slasher Chic Costume" },
    imagePrompt: `Photoreal nighttime suburban street, direct flash photography aesthetic, woman in oversized black hoodie holding a simple white mask${negativePromptSuffix}`
  },
  {
    id: 53,
    title: "Mermaid Siren (Dark)",
    category: "Chic Witchy",
    description: "Mesmerizing oceanic depths represented through shimmering teal satin, pearl drops, and wet-look styling.",
    keyPieces: ["bias-cut teal green satin slip skirt", "fitted black sweetheart bodice", "pointed metallic heels"],
    accessories: ["freshwater baroque pearl earrings", "tiny abalone shell hair clip"],
    hairMakeup: "Glossy wet-hair wave texture + luminous aquatic highlight on collarbones.",
    stylingTip: "Fluid teal satin combined with sleek wet-look hair styling delivers siren enchantment without a costume tail.",
    image: { src: "/images/halloween/costume-53.jpg", alt: "Mermaid Siren Dark Costume" },
    imagePrompt: `Photoreal evening riverside promenade, city lights reflections on water, woman in teal satin skirt with wet-look waves${negativePromptSuffix}`
  },
  {
    id: 54,
    title: "“Bad Dollhouse Queen” (Generic)",
    category: "Villain Vibes",
    description: "Unsettlingly perfect monochrome candy pink tailoring with a subtly sinister, calculated poise.",
    keyPieces: ["tailored hot-pink double-breasted blazer dress", "sheer black or nude tights", "pointed stiletto pumps"],
    accessories: ["oversized pink crystal stud earrings", "structured miniature patent vanity purse"],
    hairMakeup: "Immaculate 60s flipped-end blowout + perfectly sharp bubblegum pink lipstick.",
    stylingTip: "Make the silhouette so impeccably neat and symmetrical that it feels deliciously calculated and sinister.",
    image: { src: "/images/halloween/costume-54.jpg", alt: "Bad Dollhouse Queen Costume" },
    imagePrompt: `Photoreal bright editorial studio, woman in tailored hot-pink blazer dress with immaculate retro blowout and pink lipstick${negativePromptSuffix}`
  },
  {
    id: 55,
    title: "Alien Punk (Wearable)",
    category: "Movie-Inspired (Generic)",
    description: "Intergalactic cyberpunk streetwear built on shimmering holographic fabrics and grounded cargo pants.",
    keyPieces: ["holographic metallic silver tank top", "loose-fitting black nylon cargo pants", "chunky platform combat boots"],
    accessories: ["futuristic wrap-around silver sunglasses", "chunky silver hardware chain hoops"],
    hairMakeup: "High braided space buns + graphic silver glitter liner along the crease.",
    stylingTip: "Let the holographic metallic top be the alien cue, while keeping the cargo pants relaxed and grounded.",
    image: { src: "/images/halloween/costume-55.jpg", alt: "Alien Punk Wearable Costume" },
    imagePrompt: `Photoreal night street with neon signage reflections, woman in metallic silver top and black cargo pants with futuristic sunglasses${negativePromptSuffix}`
  }
];

export const posts: Post[] = [
  {
    title: "55 Women’s Halloween Costume Ideas (Cute, Easy & Last-Minute) – 2026",
    slug: "womens-halloween-costume-ideas-2026",
    date: "October 1, 2026",
    updatedDate: "October 1, 2026",
    excerpt: "Looking for cute, chic, and effortlessly stylish Halloween costume ideas for 2026? Explore 55 curated model-style outfit concepts spanning chic witchy vibes, classic horror, villain energy, and closet-friendly DIYs.",
    tags: ["Halloween", "Costumes", "Women", "Easy DIY", "Fall 2026"],
    coverImage: "/images/halloween-costumes.jpg",
    readingTime: "12 min read",
    author: {
      name: "Claire Vance",
      role: "Fashion Editor & Stylist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80"
    },
    featured: true,
    category: "Halloween",
    intro: [
      "Every year, the pressure to find a Halloween costume that strikes the sweet spot between effortlessly chic, genuinely recognizable, and actually comfortable hits in October. If you dread synthetic polyester bag-sets from party stores, you are not alone.",
      "The modern aesthetic for 2026 is all about wearable fashion—think tailored black velvet blazers, silky slip dresses, structured trench coats, and timeless accessories that can be re-worn all season long. Below is your definitive, curated masterlist of 55 realistic, model-style Halloween costume ideas you can filter, search, and recreate directly from your closet."
    ],
    outfits: halloweenOutfits,
    sections: [
      {
        id: "costume-gallery",
        title: "The 55 Costume Lookbook Gallery",
        intro: "Use the category filters below to find cute ideas, villain vibes, chic witchy looks, or quick closet DIYs."
      },
      {
        id: "cute-halloween-costumes",
        title: "Cute Halloween Costumes for Women",
        intro: "These looks are photogenic, feminine, and guaranteed to earn compliments at any rooftop gathering or dinner party without requiring hours of body paint.",
        items: [
          {
            name: "Modern Parisian Witch",
            description: "A sleek black mock-neck midi dress paired with sheer polka-dot tights, pointed-toe slingback kitten heels, and a wide-brim felt hat. Finish with deep bordeaux lips and a vintage crystal necklace.",
            stylingTip: "Skip the cartoon broom and carry an antique brass candlestick or small leather tote with dried lavender."
          },
          {
            name: "Sofia Coppola Starlet",
            description: "A blush pink silk slip dress, oversized beige wool cardigan slipping off one shoulder, clear rimless glasses, and a miniature vintage camcorder.",
            stylingTip: "Keep hair in soft undone bedhead waves with a clean, dewy complexion."
          },
          {
            name: "70s Vinyl Record Collector",
            description: "High-waisted wide-leg corduroy pants in mustard or rust, a crochet granny-square halter top, oversized tortoiseshell aviators, and a canvas tote carrying vintage vinyl sleeves.",
            stylingTip: "Add platform clogs and delicate layered gold medallions."
          },
          {
            name: "Coquette Black Swan",
            description: "A black sweetheart corset top, tiered black tulle mini skirt, sheer black tights, and ribbon-tied lace ballet flats. Accent with black satin hair bows.",
            stylingTip: "Smudge a charcoal winged eyeliner with a whisper of fine gunmetal shimmer."
          },
          {
            name: "Audrey Hepburn in Sabrina",
            description: "Black cigarette capri pants, black fitted ballet-neck long-sleeve knit, patent leather pointed flats, and a sleek high ponytail wrapped in silk.",
            stylingTip: "A feline liquid wing and bold sculpted brows anchor this timeless silhouette."
          }
        ]
      },
      {
        id: "easy-last-minute-costumes",
        title: "Easy Last-Minute Costumes (Stuff You Already Own)",
        intro: "Need an outfit in under 20 minutes? These high-impact concepts use core wardrobe fundamentals you probably already own.",
        items: [
          {
            name: "The Off-Duty Supermodel",
            description: "Oversized black tailored trench coat, dark oval sunglasses, slicked-back low bun, iced matcha cup in hand, and chunky gold huggie hoops.",
            stylingTip: "Add faux backstage credentials or a clipboard for an editorial runway coordinator spin."
          },
          {
            name: "Holly Golightly Morning After",
            description: "An oversized men’s white linen dress shirt, Robin's egg blue sleeping eye mask with gold trim, and tassel earplugs.",
            stylingTip: "Bare legs and cozy hotel slippers make this one of the most comfortable party looks ever conceived."
          },
          {
            name: "90s Winona Ryder Grunge",
            description: "Distressed vintage Levi’s 501s, an oversized beaten leather biker jacket, black band tee or ribbed tank, and beat-up combat boots.",
            stylingTip: "A dark berry tinted lip balm and effortless curtain bangs seal the look."
          },
          {
            name: "Vintage Tennis Champion",
            description: "Pleated white tennis skirt, crisp white polo shirt with popped collar, cable-knit sweater tied casually around shoulders, and retro tube socks with clean white sneakers.",
            stylingTip: "Carry an old-school wooden Dunlop tennis racket found at any thrift store."
          },
          {
            name: "Cereal Killer (Pun Style)",
            description: "Your favorite oversized graphic crewneck sweatshirt with small empty cereal boxes pinned across the torso, accessorized with plastic spoons and red fabric paint.",
            stylingTip: "Pair with bike shorts and fresh sneakers for an easy, funny college party look."
          }
        ]
      },
      {
        id: "work-appropriate-costumes",
        title: "Work-Appropriate Costumes for the Office",
        intro: "Office dress codes can be tricky. These costumes read as sharp, professional workwear while remaining unquestionably thematic.",
        items: [
          {
            name: "Mary Poppins (Modern Day)",
            description: "Crisp white button-down shirt tucked into a pleated navy or black midi skirt, tiny red silk bow tie at the collar, and a dark umbrella with a hooked parrot-handle.",
            stylingTip: "A carpet-print tapestry tote doubles as your practical work laptop bag."
          },
          {
            name: "Rosie the Riveter",
            description: "Classic dark-wash denim chambray utility shirt with rolled sleeves, dark denim trousers, sturdy work boots, and the iconic red-and-white polka dot head scarf.",
            stylingTip: "Red lipstick and the classic flex pose make for instant recognition in team Zoom calls."
          },
          {
            name: "Wes Anderson Character: Margot Tenenbaum",
            description: "Pinstripe polo shirt or polo dress under a structured camel faux-fur or wool coat, flat loafers, a single red plastic hair clip on one side, and heavily rimmed kohl eyeliner.",
            stylingTip: "Carry a vintage brown leather satchel or wooden cigarette case."
          },
          {
            name: "The Art Gallery Curator",
            description: "Architectural all-black ensemble: wide-leg trousers, sculptural pleated tunic top, chunky geometric statement glasses, and oversized wooden or silver cuff bracelets.",
            stylingTip: "Carry a museum catalog or exhibition floorplan for character commitment."
          },
          {
            name: "Sherlock Holmes Detective",
            description: "Houndstooth or heritage check tweed blazer, crisp white collared shirt, tailored wool trousers, and a pocket magnifying glass.",
            stylingTip: "A brown leather notebook in your breast pocket brings authentic sleuth vibes."
          }
        ]
      },
      {
        id: "spooky-chic-ideas",
        title: "Spooky-Chic Costume Ideas",
        intro: "Gothic romanticism meets high fashion. Think dark lace, rich velvets, and moody Victorian detailing.",
        items: [
          {
            name: "Victorian Vampire Countess",
            description: "Burgundy or black crushed velvet maxi dress with balloon sleeves, antique cameo choker, deep oxblood ombré lip, and subtle porcelain powder finish.",
            stylingTip: "Ditch plastic fangs in favor of exquisite sculpted eye makeup and dark gemstone rings on every finger."
          },
          {
            name: "Morticia Addams Elevated",
            description: "Floor-sweeping black knit column gown with bell sleeves, parted center-straight glass hair, crimson red almond manicure, and a single stem rose with the petals snipped off.",
            stylingTip: "Add smoky plum eyeshadow and a matte contour for the classic high-cheekbone silhouette."
          },
          {
            name: "Corpse Bride in Couture",
            description: "Vintage ivory lace wedding or prairie dress lightly dusted with charcoal chalk, dried floral crown with blue thistle, and soft periwinkle eyeshadow highlight.",
            stylingTip: "Carry a bouquet of dried baby's breath and blackened roses."
          },
          {
            name: "Fortune Teller / Mystic Tarot Reader",
            description: "Tiered emerald satin skirt, coin-trimmed velvet shawl draped over shoulders, stacked golden charm bracelets, and a vintage deck of Rider-Waite tarot cards.",
            stylingTip: "A crescent moon forehead pendant adds a touch of celestial glamour."
          },
          {
            name: "Phantom Opera Ball Attendee",
            description: "Black silk slip dress under a sheer hooded organza cape, decorated with a filigree half-face Venetian masquerade mask in antique pewter.",
            stylingTip: "Dark burgundy opera-length satin gloves elevate this into absolute luxury."
          }
        ]
      },
      {
        id: "diy-no-sew-costumes",
        title: "DIY No-Sew Costume Ideas",
        intro: "Zero sewing machine required. Just safety pins, fabric glue, ribbon, and clever styling.",
        items: [
          {
            name: "Greek Goddess of Dawn",
            description: "Drape an ivory bedsheet or 3 yards of raw linen fabric using safety pins into an asymmetrical one-shoulder toga. Cinch at the waist with braided gold rope.",
            stylingTip: "Craft a laurel leaf crown using faux greenery from the craft store spray-painted warm metallic gold."
          },
          {
            name: "Cloud & Golden Lightning",
            description: "Hot-glue white polyester stuffing/pillow fiberfill onto an old grey umbrella. Fasten dangling gold glitter cardstock lightning bolts with clear fishing line.",
            stylingTip: "Wear a sleek monochrome grey knit sweater dress underneath to keep the umbrella as the floating centerpiece."
          },
          {
            name: "Pop Art Lichtenstein Heroine",
            description: "Bright primary yellow dress or sweater. Use black liquid eyeliner to outline your collarbones, jawline, and nose with comic-book cel-shaded lines.",
            stylingTip: "Add small red dot stickers or painted dots in a grid across cheeks and craft a cardboard thought bubble on a wooden skewer."
          },
          {
            name: "Gumball Machine",
            description: "Safety pin multicolored felt pom-poms onto a simple white crewneck tee. Pair with a crimson red skater skirt and a silver cardboard 25¢ badge.",
            stylingTip: "A red beanie cap tops off this cheerful crowd-pleaser."
          },
          {
            name: "Espresso Martini Girl",
            description: "Chocolate brown mini dress, oversized clear coupe glass prop, and three round coffee-bean colored pins pinned together like martini garnish.",
            stylingTip: "Add bronze metallic shimmer body oil and gold statement earrings."
          }
        ]
      },
      {
        id: "faqs",
        title: "Halloween Fashion FAQs (Layering, Shoes & Cold Weather)",
        intro: "Practical stylist advice to stay warm and comfortable all evening long.",
        faqs: [
          {
            question: "How do I make my costume cute while staying warm in freezing October weather?",
            answer: "Fleece-lined sheer tights are the greatest fashion secret of the decade—they look identical to 20-denier black pantyhose while insulating you down to 35°F. Pair with an oversized tailored wool coat or leather trench that integrates naturally into your costume concept rather than concealing it."
          },
          {
            question: "What shoes should I choose for long nights of walking or standing?",
            answer: "Never wear brand-new stilettos. Instead, opt for sleek lug-sole Chelsea boots, pointed kitten heel booties, or chic low Mary Janes with gel insoles. Chunky black boots work with almost every witch, vampire, 90s, or grunge costume."
          },
          {
            question: "What if I have an outdoor party and an indoor party on the same night?",
            answer: "Design your costume with modular layers: an outer hero coat (like a faux-fur leopard coat for Mob Wife, or camel trench for Holly Golightly), which reveals a lightweight silk slip or corset look once indoors."
          }
        ]
      }
    ]
  },
  {
    title: "Women’s Fall Outfits 2026: 25 Trendy Looks + Capsule Checklist",
    slug: "womens-fall-outfits-2026",
    date: "September 24, 2026",
    updatedDate: "October 1, 2026",
    excerpt: "The definitive guide to Fall 2026 fashion trends. Discover 25 polished outfit formulas spanning espresso tones, buttery knits, tailored outerwear, and our downloadable 18-piece autumn capsule checklist.",
    tags: ["Fall", "Outfits", "2026", "Capsule Wardrobe", "Quiet Luxury"],
    coverImage: "/images/fall-outfits.jpg",
    readingTime: "10 min read",
    author: {
      name: "Julianne Ward",
      role: "Wardrobe Strategist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80"
    },
    featured: true,
    category: "Fall",
    intro: [
      "Fall 2026 style is marked by a confident return to tactile luxury, rich earthen tones, and architectural tailoring that feels relaxed rather than restrictive.",
      "Gone are fast-fashion gimmick pieces that last one wash. This autumn is defined by deep chocolate espresso, buttery warm oatmeals, tactile suede jackets, and heritage wool trousers that transition seamlessly from morning commute to weekend farmer's markets. Below, explore 25 high-rotation outfit formulas plus our essential capsule wardrobe checklist."
    ],
    sections: [
      {
        id: "fall-2026-color-palette",
        title: "Fall 2026 Color Palette & Key Pieces",
        intro: "This season’s tonal foundation is anchored in depth and texture rather than chaotic prints.",
        paragraphs: [
          "The hero shades for Autumn 2026 center around Deep Espresso (#2D241E), Warm Cashmere Camel (#C49A6C), Spiced Terracotta (#9E472A), and Sage Forest (#4A5844). When paired with creamy off-white foundations, the resulting look feels grounded, expensive, and quietly commanding.",
          "Key investment silhouettes include: the slouchy oversized double-breasted coat in pure wool, wide-leg tailored trousers with single deep front pleats, unstructured suede shoulder hobo bags, and chunky fisherman rib sweaters with fold-over mock necks."
        ],
        items: [
          {
            name: "Rich Espresso Suede Overshirt",
            description: "Worn open over a white silk ribbed tank or buttoned as a lightweight transitional jacket.",
            stylingTip: "Pair with ecru denim to create high-contrast Scandinavian minimalism.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790963185/Rich_Espresso_Suede_Overshirt.jpg"
          },
          {
            name: "Pleated Heritage Wool Trousers",
            description: "High-waisted with a wide pooling hem that rests softly over pointed leather ankle boots.",
            stylingTip: "Stick to charcoal, olive, or warm taupe for maximum capsule versatility.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790963185/Pleated_Heritage_Wool_Trousers.jpg"
          },
          {
            name: "Slouchy Cashmere Fisherman Knit",
            description: "Heavy-gauge knit with drop shoulders in oat or roasted hazelnut.",
            stylingTip: "Half-tuck into structured denim to maintain an intentional waistline.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790963185/Slouchy_Cashmere_Fisherman_Knit.jpg"
          }
        ]
      },
      {
        id: "10-easy-outfit-formulas",
        title: "10 Easy Fall Outfit Formulas to Memorize",
        intro: "When you have 5 minutes to get dressed in the morning, these 10 reliable equations never fail:",
        items: [
          {
            name: "Formula 1: The Parisian Uniform",
            description: "Striped navy/cream Breton cotton knit + high-rise straight-leg medium-wash jeans + structured black wool trench + red leather ballet flats.",
            stylingTip: "A slim black leather belt with gold hardware ties the pieces together.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964842/The_Parisian_Uniform.jpg"
          },
          {
            name: "Formula 2: The Monochrome Knit Set",
            description: "Ribbed oatmeal mock-neck sweater + matching ribbed column knit midi skirt + knee-high suede boots in cognac.",
            stylingTip: "Add a gold link choker necklace to break up the monochrome knit expanse.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964843/The_Monochrome_Knit_Set.jpg"
          },
          {
            name: "Formula 3: The Downtown Blazer",
            description: "Oversized houndstooth blazer + fitted white baby tee + tailored wide-leg trousers + chunky retro New Balance sneakers.",
            stylingTip: "Throw a baseball cap on and grab an oversized leather tote for the quintessential Saturday coffee run.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964882/The_Downtown_Blazer.jpg"
          },
          {
            name: "Formula 4: The Elevated Leather Look",
            description: "Butter-soft black faux-leather straight trousers + chunky ivory cable knit sweater + pointed Chelsea boots.",
            stylingTip: "Contrast the tough texture of leather with the soft fuzziness of brushed wool.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964884/The_Elevated_Leather_Look.jpg"
          },
          {
            name: "Formula 5: The Denim-on-Denim Revival",
            description: "Chambray western shirt tucked into dark-wash wide-leg denim + brown suede utility jacket + caramel ankle boots.",
            stylingTip: "Keep the denim washes within one shade of each other for a cohesive, long silhouette.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964868/The_Denim-on-Denim_Revival.jpg"
          },
          {
            name: "Formula 6: The Silk Slip Transition",
            description: "Summer champagne silk slip dress + chunky oversized knit pullover layered overtop + lace-up combat boots.",
            stylingTip: "Belt the sweater at your natural waist with a thin belt, then blouse the fabric over to conceal the belt.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964868/The_Silk_Slip_Transition.jpg"
          },
          {
            name: "Formula 7: The Quilted Country Weekend",
            description: "Olive green diamond-quilted jacket + cream turtleneck + black skinny equestrian pants + tall leather riding boots.",
            stylingTip: "Classic British heritage tailoring that handles brisk October winds.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964858/The_Quilted_Country_Weekend.jpg"
          },
          {
            name: "Formula 8: The Cardigan As A Top",
            description: "Chunky v-neck cardigan buttoned closed as a shirt + vintage straight denim + pointed leather mule slippers.",
            stylingTip: "Leave the bottom button undone for casual drape.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964870/The_Cardigan_As_A_Top.jpg"
          },
          {
            name: "Formula 9: The Tailored Short Suit",
            description: "Wool-blend pleated Bermuda shorts + matching structured blazer + sheer tights + chunky platform loafers.",
            stylingTip: "A high-fashion transition look for crisp 60°F autumn afternoons.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964836/The_Tailored_Short_Suit.jpg"
          },
          {
            name: "Formula 10: The Rainy Day Trench",
            description: "Water-resistant double-breasted storm trench + heather grey cashmere hoodie + black leggings + ankle rain boots.",
            stylingTip: "Roll trench sleeves to expose the knit sweatshirt cuffs.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790964841/The_Rainy_Day_Trench.jpg"
          }
        ]
      },
      {
        id: "casual-fall-outfits",
        title: "Casual Fall Outfits for Weekends & Travel",
        intro: "Comfort-first outfits designed for pumpkin patches, cider flights, and brisk neighborhood walks.",
        items: [
          {
            name: "The Market Morning",
            description: "Cream waffle-knit thermal top layered under a fleece-lined canvas barn jacket, straight-leg raw hem jeans, and shearling-lined Boston clogs.",
            stylingTip: "Bring an oversized French net market bag filled with seasonal gourds and fresh eucalyptus.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790965568/The_Market_Morning.jpg"
          },
          {
            name: "The Apple Orchard Look",
            description: "Buffalo check wool overshirt in forest green and navy, relaxed corduroy trousers, and durable waterproof hiking boots.",
            stylingTip: "Keep accessories functional with a ribbed merino wool beanie and leather camera crossbody.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790965569/The_Apple_Orchard_Look.jpg"
          },
          {
            name: "The Airport Lounge Layer",
            description: "Oversized matching fleece lounge set in heather oat, draped with an ultra-long camel blanket scarf and platform slip-on sneakers.",
            stylingTip: "Layer an ultralight packable down vest underneath for drafty airplane cabins.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790965564/The_Airport_Lounge_Layer.jpg"
          }
        ]
      },
      {
        id: "fall-work-outfits",
        title: "Fall Work Outfits (Modern Corporate & Smart Casual)",
        intro: "Polished Monday-to-Friday attire that commands respect while keeping you cozy in aggressive office air conditioning.",
        items: [
          {
            name: "The Power Monochrome",
            description: "Full tonal camel look: camel turtleneck knit tucked into camel wool pleated trousers, draped with a double-faced camel wrap coat.",
            stylingTip: "Break up identical tones with rich burgundy leather pumps and a structured structured top-handle bag.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790966313/The_Power_Monochrome.jpg"
          },
          {
            name: "The Pleated Midi Formula",
            description: "Fine-gauge merino mock-neck top tucked into a knife-pleated faux-leather midi skirt, paired with knee-high leather boots.",
            stylingTip: "A thin metal buckle belt provides architectural balance to the flowing pleats.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790966312/The_Pleated_Midi_Formula.jpg"
          },
          {
            name: "The Tweed Jacket Update",
            description: "Cropped collarless bouclé jacket in cream and black yarn, paired with crisp white poplin shirt, dark indigo wide-leg jeans, and cap-toe slingback heels.",
            stylingTip: "Permitted in creative and modern corporate environments on casual Thursdays or client lunch days.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790966312/The_Tweed_Jacket_Update.jpg"
          }
        ]
      },
      {
        id: "date-night-fall-outfits",
        title: "Date-Night Fall Outfits (Cozy & Sultry)",
        intro: "Low-light romantic looks that balance warm coverage with subtle, flattering reveals.",
        items: [
          {
            name: "The Off-Shoulder Knit & Satin Skirt",
            description: "Slouchy black mohair off-the-shoulder knit sweater paired with a bias-cut chocolate brown silk slip skirt and minimalist strappy heels.",
            stylingTip: "Highlight the collarbone with subtle golden body shimmer and sculptural brass earrings.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790967431/The_Off-Shoulder_Knit_Satin_Skirt.jpg"
          },
          {
            name: "The Sheer Layered Shirtdress",
            description: "Black sheer organza midi shirtdress layered over an opaque black mini slip, worn with knee-high pointed suede boots.",
            stylingTip: "A deep plum berry lip brings rich autumn drama to intimate candlelit dining.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790967433/The_Sheer_Layered_Shirtdress.jpg"
          },
          {
            name: "The Velvet Blazer & Tailored Denim",
            description: "Midnight emerald velvet dinner jacket worn with a lace camisole, high-waisted black straight jeans, and pointed-toe patent pumps.",
            stylingTip: "Push up the blazer sleeves to flash stacked crystal tennis bracelets.",
            image: "https://res.cloudinary.com/jfi5wbdy/image/upload/v1790967428/The_Velvet_Blazer_Tailored_Denim.jpg"
          }
        ]
      },
      {
        id: "capsule-checklist",
        title: "Fall Capsule Wardrobe Checklist (18 Essentials)",
        intro: "The only 18 pieces you need to generate over 60 distinct autumn outfits. Save or screenshot this checklist:",
        checklist: [
          "Outerwear: 1 Tailored Wool Double-Breasted Long Coat (Camel or Charcoal)",
          "Outerwear: 1 Oversized Classic Trench Coat with Belt (Khaki)",
          "Outerwear: 1 Suede or Leather Moto/Barn Jacket (Espresso Brown)",
          "Outerwear: 1 Relaxed Heritage Houndstooth Blazer",
          "Knitwear: 1 Heavy Fisherman Cable-Knit Crewneck (Cream/Oat)",
          "Knitwear: 1 Fine Merino Wool Mock-Neck Sweater (Black)",
          "Knitwear: 1 Slouchy V-Neck Cardigan (Chocolate Brown)",
          "Tops: 2 Crisp Poplin Button-Down Shirts (1 White, 1 Blue Stripe)",
          "Tops: 2 Essential Layering Ribbed Long-Sleeve Tees (1 Black, 1 White)",
          "Bottoms: 1 High-Waisted Single-Pleat Trousers (Charcoal or Taupe)",
          "Bottoms: 1 Classic Medium-Wash Straight-Leg Denim",
          "Bottoms: 1 Deep Indigo or Black Wide-Leg Denim",
          "Dresses/Skirts: 1 Bias-Cut Silk Satin Midi Skirt (Black or Bronze)",
          "Shoes: 1 Pair Pointed Leather Ankle Booties (Black or Cognac)",
          "Shoes: 1 Pair Knee-High Suede Boots",
          "Shoes: 1 Pair Leather Loafers with Gold Hardware",
          "Accessories: 1 Structured Everyday Leather Tote Bag",
          "Accessories: 1 Oversized Brushed Wool Blanket Scarf"
        ]
      }
    ]
  },
  {
    title: "Cute Winter Outfits for Women: 30 Warm & Stylish Outfit Ideas (2026–2027)",
    slug: "cute-winter-outfits-for-women",
    date: "September 18, 2026",
    updatedDate: "October 1, 2026",
    excerpt: "Conquer sub-zero temperatures without sacrificing style. Learn the 3-tier thermal layering rule, fail-proof coat-and-boot pairings, and 30 warm, chic winter outfit formulas for 2026–2027.",
    tags: ["Winter", "Outfits", "Layering", "Cozy", "Outerwear"],
    coverImage: "/images/winter-outfits.jpg",
    readingTime: "9 min read",
    author: {
      name: "Astrid Lindholm",
      role: "Nordic Style Contributor",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80"
    },
    featured: true,
    category: "Winter",
    intro: [
      "Winter dressing often feels like a daily compromise between looking chic and avoiding hypothermia. When the temperature plunges beneath freezing, oversized puffy sleeping-bag coats easily swallow any semblance of personal aesthetic.",
      "The Scandinavian philosophy of winter styling proves that true warmth is an engineered science of smart fabrics and proportional silhouettes. With proper foundation thermal layers, premium wool-cashmere blends, and architectural coats, you can look impeccable on the snowiest streets of Copenhagen, New York, or Montreal. Here is your master handbook for winter 2026–2027."
    ],
    sections: [
      {
        id: "layering-guide",
        title: "The 3-Tier Layering Guide (Base, Mid, Outer)",
        intro: "Mastering thermal mechanics is the secret to staying toasty without looking bulky:",
        paragraphs: [
          "Layer 1 (The Base / Skin Layer): Never wear 100% cotton against your skin in freezing weather. Cotton absorbs perspiration and stays cold and damp. Choose 100% ultrafine Merino wool (17.5 micron) or engineered Japanese thermal silk. This regulates body temperature and wicks away moisture.",
          "Layer 2 (The Insulating Mid Layer): This traps ambient body heat. Opt for 100% cashmere knits, brushed alpaca wool, or lightweight micro-fleece. Avoid synthetic acrylic sweaters that trap sweat while letting cold wind pass right through.",
          "Layer 3 (The Weather-Shield Outer Layer): Heavy double-faced virgin wool (at least 700gsm density) for dry days, or a technical down parka with 700+ fill power and windproof Gore-Tex membrane for heavy blizzards."
        ],
        tips: [
          "Always tuck your base-layer top directly into your thermal leggings before pulling on your trousers to eliminate cold drafts at the lower back.",
          "Buy your winter boots half a size larger than normal so your toes have room to wiggle when wearing thick wool socks—tight shoes restrict circulation and make feet freeze rapidly.",
          "Keep silk scarves inside your coat collar to prevent body heat from escaping through the neckline."
        ]
      },
      {
        id: "coat-boot-formulas",
        title: "Coat + Boot Outfit Formulas That Always Look Expensive",
        intro: "Because your coat and boots make up 90% of what anyone sees in winter, nail these pairings first:",
        items: [
          {
            name: "The Ivory Cocoon + Chestnut Equestrian Boot",
            description: "Cream oversized teddy or boucle wool coat + chunky ivory cable turtleneck + slim dark wool trousers + tall chestnut leather riding boots.",
            stylingTip: "A matching cream ribbed cashmere scarf creates a seamless, high-society apres-ski impression."
          },
          {
            name: "The Belted Maxi Coat + Pointed Stiletto Bootie",
            description: "Floor-length charcoal virgin wool robe coat tied tightly at the waist + fine black turtleneck + sheer thermal tights + pointed patent kitten-heel boots.",
            stylingTip: "The sharp pointed toe extending from beneath the long wool hem elongates your visual height dramatically."
          },
          {
            name: "The Boxy Shearling Aviator + Lug-Sole Chelsea",
            description: "Dark brown cracked leather jacket lined with plush sheep shearling + straight-leg raw denim + rugged waterproof platform Chelsea boots.",
            stylingTip: "Roll up the denim cuff by one inch so it rests cleanly on the boot collar without bunching."
          },
          {
            name: "The Technical Quilted Parka + Shearling Moon Boots",
            description: "Matte olive cinch-waist down parka with faux-fur hood trim + black thermal leggings + waterproof suede winter snow boots.",
            stylingTip: "A thick knit pom-pom beanie in coordinating olive ties the snowy aesthetic together."
          }
        ]
      },
      {
        id: "casual-winter-outfits",
        title: "Casual Winter Outfits (Cozy & Daily)",
        intro: "Effortless styling for snowy coffee dates, holiday shopping, and weekend strolls.",
        items: [
          {
            name: "The Apres-Ski Lodge Look",
            description: "Fair Isle patterned Nordic wool sweater + high-rise cream corduroy pants + shearling-lined lace-up boots + earmuffs.",
            stylingTip: "Opt for traditional alpine geometric patterns in soft neutrals like taupe, navy, and cream."
          },
          {
            name: "The Puffer & Wide-Leg Trouser",
            description: "Cropped high-gloss black down puffer jacket + ultra wide-leg grey flannel trousers + chunky platform combat boots.",
            stylingTip: "The contrast between the sporty cropped jacket and formal wide trousers creates high-fashion streetwear tension."
          },
          {
            name: "The Cashmere Wrap Dress with Boots",
            description: "Heavy gauge heather-grey ribbed cashmere wrap midi dress + fleece-lined sheer tights + knee-high black leather boots + wool blanket scarf.",
            stylingTip: "Layer an ultralight down vest inside the dress if dining outdoors near patio heaters."
          },
          {
            name: "The Winter White Monochrome",
            description: "Ecru denim trousers + thick cream shaker-stitch turtleneck sweater + ivory wool overcoat + bone leather Chelsea boots.",
            stylingTip: "Wearing all white in winter radiates immaculate quiet luxury. Treat your denim with fabric water repellent."
          }
        ]
      },
      {
        id: "winter-work-outfits",
        title: "Winter Work Outfits (Warm & Commute-Ready)",
        intro: "How to survive the freezing train platform and transition gracefully into a heated office building.",
        items: [
          {
            name: "The Layered Shirtdress & Sweater",
            description: "Crisp white collared cotton shirt layered under an oversized navy cashmere crewneck + pleated charcoal wool midi skirt + knee boots.",
            stylingTip: "Pop the white collar and cuffs outside the navy sweater for intentional Ivy League prep."
          },
          {
            name: "The Flannel Trouser Suit",
            description: "Double-breasted heavyweight wool flannel blazer and matching trousers in deep pinstripe navy + fine black silk-merino turtleneck base.",
            stylingTip: "Wear sleek insulated snow boots during your transit, keeping a pair of classic leather loafers tucked under your office desk."
          },
          {
            name: "The Turtleneck Under Sleeveless Dress",
            description: "Fitted black merino turtleneck worn underneath a tweed or houndstooth sleeveless shift dress + opaque tights + block-heel Mary Janes.",
            stylingTip: "Allows you to wear your favorite autumn dresses well into deep January."
          }
        ]
      },
      {
        id: "freezing-weather-tips",
        title: "Freezing-Weather Tips: Staying Cute Under 20°F (-7°C)",
        intro: "Battle-tested survival hacks from Nordic fashion editors:",
        tips: [
          "Double Up Your Headwear: Pair a cashmere beanie with the hood of your down coat raised overtop. A massive percentage of body heat escapes from the scalp and nape.",
          "Cashmere Socks Over Tights: Layer thick 100% cashmere boot socks over your fleece-lined tights. The cashmere will never scratch and adds instant warmth inside leather boots.",
          "Upgrade To Leather Tech Gloves with Cashmere Lining: Ditch flimsy knit yarn gloves that let icy winds cut right through. Invest in supple lambskin gloves lined with cashmere with touchscreen-compatible fingertips.",
          "Carry Miniature Solid Balm for Skin & Lips: Bitter sub-zero air strips moisture in minutes. Keep an all-purpose shea-butter stick to instantly soothe cheek dryness and prevent cracked lips.",
          "Choose Longline Outerwear: Coats that end past the knee block freezing wind tunnels between tall city buildings that hit directly at the thighs."
        ]
      }
    ]
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts;
}

export function getRelatedPosts(currentSlug: string): Post[] {
  return posts.filter((p) => p.slug !== currentSlug);
}
