import { NavbarConfig, FooterConfig } from "../types/app.config";
import footDumy from "@/public/assest/footDumy.png";
import { MenuSpesialTypes, TestiMoniTypes } from "../types/API";
import ProfileDummy from "@/public/assest/profileDummy.png";

export const NavbarConfigData: NavbarConfig[] = [
  {
    title: "Product",
    href: "/",
  },
  {
    title: "Receipe",
    href: "/",
  },
  {
    title: "About",
    href: "/",
  },
];

export const MenuSpesialTypesData: MenuSpesialTypes[] = [
  {
    image: footDumy,
    title: "Kari Special",
    desc: "Ayam empuk dengan kuah kental penuh rempah, gurihnya nendang banget!",
  },
  {
    image: footDumy,
    title: "Kari Special",
    desc: "Ayam empuk dengan kuah kental penuh rempah, gurihnya nendang banget!",
  },
  {
    image: footDumy,
    title: "Kari Special",
    desc: "Ayam empuk dengan kuah kental penuh rempah, gurihnya nendang banget!",
  },
  {
    image: footDumy,
    title: "Kari Special",
    desc: "Ayam empuk dengan kuah kental penuh rempah, gurihnya nendang banget!",
  },
];

export const TestiMoniTypesData: TestiMoniTypes[] = [
  {
    foto: ProfileDummy,
    bintang: "2",
    desc: "Saya sangat terkesan dengan resep-resepnya! Rasanya otentik dan mudah diikuti, cocok untuk masakan rumahan yang istimewa. Kini saya  lebih percaya diri memasak untuk keluarga",
    title: "Aqiiaaa",
  },
];

export const FooterTypesData: FooterConfig[] = [
  {
    Footer1: {
      desc: "Managing restaurant menus and other information including location and opening hours. Managing the preparation of orders at a restaurant kitchen.",
    },

    Footer2: [
      {
        title: "Menu",
        href: "/",
      },
      {
        title: "Products",
        href: "/",
      },
      {
        title: "About Us",
        href: "/",
      },
      {
        title: "Dish",
        href: "/",
      },
      {
        title: "Asian",
        href: "/",
      },
    ],

    Footer3: [
      {
        title: "Salad",
        href: "/",
      },
      {
        title: "Spicy",
        href: "/",
      },
      {
        title: "Bowl",
        href: "/",
      },
      {
        title: "Kitchen",
        href: "/",
      },
      {
        title: "Home",
        href: "/",
      },
    ],
    Footer4: [
      {
        Icon: "Facebook",
        href: "/",
      },
      {
        Icon: "Twitter",
        href: "/",
      },
      {
        Icon: "Instagram",
        href: "/",
      },
    ],
  },
];
