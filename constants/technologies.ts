import React from 'react';
import { RiFlutterFill } from 'react-icons/ri';
import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { DiCss3, DiVisualstudio } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaWordpressSimple, FaFigma, FaTrello } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';

// Interface for SVG icons
interface SvgIcon {
  content: string; // Path data for the SVG icon
}

// Interface for Technology with custom icon type
interface Technology {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | SvgIcon; // Supports both Font Awesome and custom SVG icons
}

interface Category {
  category: string;
  items: Technology[];
}

// Define custom SVG icon types for imported SVGs
const AdobeXDIcon: SvgIcon = { content: require('../public/assets/svg/adobexd.svg').default };
const ZeplinIcon: SvgIcon = { content: require('../public/assets/svg/zeplin.svg').default };
const WebstormIcon: SvgIcon = { content: require('../public/assets/svg/webstorm.svg').default };
const JiraIcon: SvgIcon = { content: require('../public/assets/svg/jira.svg').default };
const HeadlessUiIcon: SvgIcon = { content: require('../public/assets/svg/headlessui.svg').default };
const MuiIcon: SvgIcon = { content: require('../public/assets/svg/mui.svg').default };
const ChakraIcon: SvgIcon = { content: require('../public/assets/svg/chakraui.svg').default };
const StyledIcon: SvgIcon = { content: require('../public/assets/svg/styledcomponents.svg').default };

export const TECHNOLOGIES: Category[] = [
  {
    category: 'Mobile',
    items: [{ name: 'Flutter', icon: RiFlutterFill }],
  },
  {
    category: 'Front-end',
    items: [
      { name: 'HTML', icon: AiFillHtml5 },
      { name: 'CSS', icon: DiCss3 },
      { name: 'JS', icon: IoLogoJavascript },
      { name: 'React', icon: FaReact },
      { name: 'Next', icon: TbBrandNextjs },
      { name: 'Tailwind CSS', icon: TbBrandTailwind },
      { name: 'MUI', icon: MuiIcon },
      { name: 'AntD', icon: AiOutlineAntDesign },
      { name: 'Bootstrap', icon: BsBootstrap },
      { name: 'Chakra', icon: ChakraIcon },
      { name: 'styled components', icon: StyledIcon },
      { name: 'HeadlessUI', icon: HeadlessUiIcon },
    ],
  },
  {
    category: 'UI tools',
    items: [
      { name: 'Figma', icon: FaFigma },
      { name: 'Zeplin', icon: ZeplinIcon },
      { name: 'XD', icon: AdobeXDIcon },
    ],
  },
  {
    category: 'Other tools',
    items: [
      { name: 'WordPress CMS', icon: FaWordpressSimple },
      { name: 'Jira', icon: JiraIcon },
      { name: 'Trello', icon: FaTrello },
      { name: 'Github', icon: AiFillGithub },
      { name: 'Gitlab', icon: AiFillGitlab },
      { name: 'VsCode', icon: DiVisualstudio },
      { name: 'WebStorm', icon: WebstormIcon },
    ],
  },
];
