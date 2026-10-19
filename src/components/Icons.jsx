// Central icon registry so components reference icons by short keys.
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiAntdesign,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiTypeorm,
  SiServerless,
  SiGithubactions,
  SiGithub,
  SiWhatsapp,
} from "react-icons/si";
import { FaAws, FaLinkedinIn } from "react-icons/fa6";
import { LuBrainCircuit, LuMail, LuDatabase, LuTable, LuPlug, LuSearchCode, LuLayers, LuCloudUpload } from "react-icons/lu";

export const techIcons = {
  react: SiReact,
  next: SiNextdotjs,
  ts: SiTypescript,
  js: SiJavascript,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  antd: SiAntdesign,
  node: SiNodedotjs,
  express: SiExpress,
  nest: SiNestjs,
  rest: LuPlug,
  graphql: SiGraphql,
  sql: LuTable,
  postgres: SiPostgresql,
  database: LuDatabase,
  mongo: SiMongodb,
  typeorm: SiTypeorm,
  openai: LuBrainCircuit,
  vector: LuSearchCode,
  aws: FaAws,
  queue: LuLayers,
  amplify: LuCloudUpload,
  serverless: SiServerless,
  cicd: SiGithubactions,
  github: SiGithub,
};

export const socialIcons = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
  whatsapp: SiWhatsapp,
  email: LuMail,
};
