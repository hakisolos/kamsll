//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFDLzlaOW82YUs1UHNDNDZJOFoweTRQMUlsaWxnTDBEZnNWK1d4T24xND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHVRcTRUblU4Ym5XS1FxaUhNQTRvS3FNRXgrUkdoN2dreUwyblVIWHJ5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTmZWSVo5ME1tVzc1cnpjemJvL29vcjRKWTdSU3NSdk82NWpEVzlNdTEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTOWdTZHVkTmNRczBWUGFVS0pOWk1tRTdVWit3cWs3YVNTajVRZWNTcnhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9OMXpDUEdiT1FCQjdnVE5kanZaR0I2TDRvVkRlMUZKb2thQ2JuVThRMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQZmRadUpoRVpXVGNGMUNCMjh2VkJtbW5POVJqS1BIM21JY3dTUVRORGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pLYVRqaEVTRzRlTDNCYWkwRVFHNmFlRUluRmt5NkVtZW9YR1p5NisyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUm1rZDVRRDVBTGlPNkgyR2pvTUtpbzlnZUJnY2NCMnRhNXJXWGYzQUhsYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild1VDNpaXVRVXV4cjNaVkxESHdvY2hsZnI4RDVLb1JBUnF2blN2dDczNlhSZ2RNdm45M0ZUK3YxckxJd1ljSVM2QUZESzd4dGhTOEw0YVdIdmZ4UERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiIvQUNYaWpSTmt2bGozamFJU3g0S1hwa0dHbDNhaVNaZjhOL3VwbUFXd05RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNDE3MjAyMjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDNDMzY2Q0RBREUyQjlGOUE0MTA1MEUwNkE1OTNFOEIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTY0ODYxN30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE0MTcyMDIyMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQjUzMDAyMDdENzY2OTc5NkVGMDUzNDQ3QjVDRjMzRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NjQ4NjE3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuYTBvZWhpUVFDdTc2ZXRITEhxaVV3IiwicGhvbmVJZCI6IjBhMjk1MTVjLWQ0OTQtNDg4MS05ZjZlLWQyYWIyODVjMDQzZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFZ3JEZGQyZUlQaVNYYVh3SG1OQ3g0OGMyZmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXpKMFh4UThXMCt3cnNGSVRqUTY2cUU1QUs0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjIyRkVBRUtZIiwibWUiOnsiaWQiOiIyMzQ4MTQxNzIwMjIwOjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkthbXNpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOL2NnZ29RMnAzdHRnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqaXNWSWxIVVlGclFiblZySzZqRFRjZ2p4T2ZLbUZvN0hNRDMwaEh3MW5JPSIsImFjY291bnRTaWduYXR1cmUiOiJJT2xvUUlxL3R1TWFka0YyWjFVOWdOUXV3OFd0MDkxSmVBTEgxTlcwTzRJYkhjaUZVM2pKZnN3VmNQOE1WRGFsZmp4UUIvU21CcmdhUjRMbHp2M01CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT09zV3BKUm1UOGR0MWR4ZFpRTkZ4c2x2dThGWUFFdlRoRFEyT1IrOWZUZk5BazFSMjNjaTV6ZFp1YzFLcUpoNnZ4Y2pEUEU0WWQySXBaZ0h1WjVHQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQxNzIwMjIwOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk0ckZTSlIxR0JhMEc1MWF5dW93MDNJSThUbnlwaGFPeHpBOTlJUjhOWnkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU2NDg2MTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3lOIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
