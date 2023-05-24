import { APP_URL } from "@/constants/App"
import { IConfig } from "next-sitemap"

const siteUrl = APP_URL

export default <IConfig>{
  siteUrl,
  generateRobotsTxt: true, // (optional)
}
