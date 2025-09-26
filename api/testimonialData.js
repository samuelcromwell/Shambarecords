import { Quote } from 'lucide-react';

/**
 * Tip: add these to next.config.js if not already:
 * images: {
 *   remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
 * }
 */

const testimonials = [
  {
    id: '01',
    // square transform so dimensions are predictable
    img: 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_640,h_640/v1758869767/5_fhicqw.jpg',
    width: 640,
    height: 640,
    Des: "Shamba VetCare+ helped us stop a livestock disease outbreak before it spread. Their AI alerts are a game changer for animal health.",
    title: 'Mary W.',
    sub: "Shamba VetCare+",
    icon: Quote,
  },
  {
    id: '02',
    img: 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_640,h_640/v1758869767/3_tcinst.jpg',
    width: 640,
    height: 640,
    Des: "Using Shamba Connect has transformed how we work with our cooperatives. Real-time data means better planning and better prices for our farmers.",
    title: 'Amina N.',
    sub: "Shamba Connect",
    icon: Quote,
  },
  {
    id: '03',
    img: 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_640,h_640/v1758869767/1_wixsag.png',
    width: 640,
    height: 640,
    Des: "Thanks to Shamba Shield, my farm recovered after floods wiped out my crops. The claim process was fast, transparent, and completely digital.",
    title: 'Grace M.',
    sub: "Shamba Shield",
    icon: Quote,
  },
  {
    id: '04',
    img: 'https://res.cloudinary.com/dwoxop5y0/image/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_640,h_640/v1758869766/4_xzvjrr.jpg',
    width: 640,
    height: 640,
    Des: "With TraceXpert, our produce now meets export standards. We’ve gained new buyers overseas who value our traceable practices.",
    title: 'Peter O.',
    sub: "TraceXpert",
    icon: Quote,
  },
  {
    id: '05',
    img: 'https://res.cloudinary.com/dwoxop5y0/image/upload/v1758870452/medium-shot-man-carrying-tool_1_yhes4u.jpg',
    width: 640,
    height: 640,
    Des: "Shamba Records helped us access microloans when no one else would. With their support, our yields increased by over 30% and we now sell to premium markets.",
    title: 'Joseph K.',
    sub: "Shamba Cash Boost",
    icon: Quote,
  },
];

export default testimonials;
