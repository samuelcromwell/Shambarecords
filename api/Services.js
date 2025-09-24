import { Leaf, ShieldCheck, Tractor, Globe, Stethoscope, CloudSun, Wallet, ReceiptEuro, Link, Boxes, Network, Hexagon } from "lucide-react";

/**
 * Cloudinary CDN (with delivery transforms)
 * - f_auto,q_auto,dpr_auto: optimal format/quality/HiDPI
 * - c_fill,g_auto: responsive crop with smart gravity
 */
const CLD_CASHBOOST     = 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto/v1758711560/cashboost_umchtl.jpg';
const CLD_CONNECT       = 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto/v1758711559/shamba-connect_u5vh0m.jpg';
const CLD_VETCARE       = 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto/v1758711561/vet-care_z9x2fl.jpg';
const CLD_SHIELD        = 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto/v1758711560/shamba-shield_is5dnc.jpg';
const CLD_SMART_SEASON  = 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto/v1758711560/smart-season_hv2xwd.jpg';

// New Cloudinary replacements for remaining locals
const CLD_MICROVAULT    = 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto/v1758716756/microvault_uxayiz.png';
const CLD_CARBONGROW    = 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto/v1758716756/carbongrow_uxe3t5.jpg';
const CLD_TRACEXPERT    = 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto/v1758716754/tracexpert_hdpl2h.jpg';
const CLD_TRACEABILITY  = 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto/v1758716750/traceability_zb3zig.png';

const Services = [
  {
    id: 1,
    image: CLD_CASHBOOST,
    icon: Wallet,
    subtitle: 'Unlock Capital. Cultivate Growth.Transport',
    title: 'Shamba Cash Boost',
    description: 'AI-Powered Microfinance for the Modern Farmer',
    lgdescription: 'Say goodbye to paperwork and hello to data- driven credit.Shamba Cash Boost uses your actual farm performance — not your bank history — to unlock fast, fair, and transparent microloans.Powered by intelligent credit scoring and real - time analytics, we empower farmers to invest, grow, and bounce back stronger.',
    slug: 'https://cashboost.shambarecords.com'
  },
  {
    id: 2,
    image: CLD_CONNECT,
    icon: Tractor,
    subtitle: 'The Digital Nerve Center for Agriculture',
    title: 'Shamba Connect',
    lgdescription:' Digitize your entire value chain. Shamba Connect is the CRM engine for cooperatives, aggregators, and agribusinesses, streamlining farmer onboarding, performance tracking, payment integration, and more. It connects every actor in agriculture — smallholders, processors, exporters — into a single data-powered ecosystem',
    description: 'Seamless Integration from Farmer to Market',
    slug: 'https://connect.shambarecords.com'
  },
  {
    id: 3,
    image: CLD_VETCARE,
    icon: Stethoscope,
    subtitle: 'Proactive Care. Connected Expertise.',
    title: 'Shamba VetCare+',
    lgdescription:'Stay ahead of disease with smart animal health solutions. VetCare+ uses AI to monitor livestock health, detect early risks, and connect farmers to instant veterinary support. Better care, lower mortality, higher profits.',
    description: 'AI-Driven Animal Health for Thriving Farms ',
    slug: 'https://vetcare.shambarecords.com'
  },
  {
    id: 4,
    image: CLD_SHIELD,
    icon: ShieldCheck,
    subtitle: 'Protect Your Harvest. Empower Your Future.',
    title: 'Shamba Shield',
    lgdescription:'In a world of climate shocks, Shamba Shield offers powerful protection. Our digital insurance platform covers crops, livestock, equipment, and income — backed by verified farm records. Claims are processed quickly, transparently, and fairly.',
    description: 'Data-Driven Farm Insurance, Reimagined ',
    slug: 'https://insurance.shambarecords.com'
  },
  {
    id: 5,
    image: CLD_SMART_SEASON,
    icon: CloudSun,
    subtitle: 'Grow with Intelligence. Harvest with Power.',
    title: 'Shamba SmartSeason',
    lgdescription:' AI meets agronomy. Shamba SmartSeason gives farmers hyper-personalized insights — when to plant, irrigate, fertilize, and harvest — based on real-time weather, soil, and satellite data.',
    description: 'Precision Agriculture in Every Pocket',
    slug: 'https://smartseason.shambarecords.com'
  },
  {
    id: 6,
    image: CLD_CARBONGROW, // was local img3
    icon: Leaf,
    subtitle: 'Earn Carbon Credits. Build Resilient Farms.',
    title: 'CarbonGrow',
    lgdescription:'We help farmers go green andd get paid for it. Through agroforestry and regenerative practices, CarbonGrow enables farms to sequester carbon and sell verified credits in global markets. Easy onboarding. Transparent tracking. Real earnings.',
    description: 'Climate Action Meets Farm Income',
    slug: 'https://carbongrow.shambarecords.com'
  },
  {
    id: 7,
    image: CLD_TRACEABILITY, // was local img9
    icon: Globe,
    subtitle: 'Trust, Transparency & Trade Reinvented',
    title: 'TraceXpert',
    lgdescription:' Get export-ready with verified, tamper-proof traceability. TraceXpert uses blockchain to track your produce from the farm to global markets, ensuring full transparency on origin, safety, and sustainability. Eliminate paper trails and unlock new demand in premium markets.',
    description: 'From Seed to Shelf, Blockchain-Certified',
    slug: 'https://tracexpert.shambarecords.com'
  },
  {
    id: 8,
    image: CLD_TRACEXPERT, // was local img4
    icon: ReceiptEuro,
    subtitle: 'Trust, Transparency & Trade Reinvented',
    title: 'Farmer Coupons',
    lgdescription: 'To drive this transformation, Shamba Records is launching an innovative collection of tiered digital coupons aimed at empowering and uplifting Africa’s smallholder farmers. Each digital coupon symbolizes a meaningful level of support, enabling you to make a direct impact on lives while fostering sustainable agriculture.',
    description: 'Millions of African farmers are trapped in poverty due to a lack of access to credit, modern tools, and sustainable resources.',
    slug: 'https://fundraiser.shambarecords.com/'
  },
  {
    id: 9,
    image: CLD_MICROVAULT, // was local img8
    icon: Boxes, 
    subtitle: 'Bridging the $170B Lending Gap in Agriculture',
    title: 'MicroVault',
    lgdescription: 'MicroVault by Shamba Records is a blockchain-powered micro-lending engine designed to unlock financial access for Africa’s smallholder farmers. By verifying and generating verifiable digital credentials, MicroVaulr connects farmers to banks, microfinance institutions, and DeFi platforms with AI-driven credit scoring and transparent, on-chain lending via Stellar’s Soroban smart contracts and ERC-4626 vaults. The result: affordable, scalable, and trustworthy financing that transforms productivity, resilience, and incomes for millions of farmers.',
    description: 'AI + Blockchain Lending Engine for Africa’s Farmers',
    slug: 'https://microvault.shambarecords.com/'
  }  
];

export default Services;
