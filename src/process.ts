import { readdirSync, readFile, writeFile } from "fs";
import { join } from "path";
import { fitzpatrickModifiers, humanEmoji } from "./human-emoji";
import { v4 as uuidv4 } from "uuid";

const JSON_FILE_LOCATION = join(__dirname, "../vendor/json");
const DIST_LOCATION = join(__dirname, "../dist");

type Emoji = {
  alfredsnippet: {
    snippet: string;
    uid: string;
    name: string;
    keyword: string;
  };
};

const processFile = (filePath: string): Promise<string> =>
  new Promise((resolve, reject) => {
    if (filePath.endsWith(".png")) {
      return resolve("no action required");
    }
    readFile(filePath, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err);
      }
      let emoji: Emoji | undefined;
      try {
        emoji = JSON.parse(data) as Emoji;
      } catch (err) {
        console.log(filePath, "bailed");
        return reject(err);
      }
      if (!emoji) {
        return reject("emoji is undefined");
      }
      const alf = emoji.alfredsnippet;
      fitzpatrickModifiers.forEach((modifier) => {
        if (humanEmoji.includes(alf.snippet)) {
          const newEmoji = alf.snippet + modifier[0];
          alf.name = alf.name.replace(alf.snippet, newEmoji);
          alf.snippet = newEmoji;
        }
        alf.uid = uuidv4();
        const newFilePath = `${modifier[1]}/${alf.name.replace(/:/g, "")} [${
          alf.uid
        }].json`;
        writeFile(
          join(DIST_LOCATION, newFilePath),
          JSON.stringify(emoji),
          { encoding: "utf-8" },
          () => resolve(emoji!.alfredsnippet.snippet)
        );
      });
    });
  });

const files = readdirSync(JSON_FILE_LOCATION);
Promise.all(files.map((file) => processFile(join(JSON_FILE_LOCATION, file))))
.then(() => {
  console.log("👍🏿👍🏾👍🏽👍🏼👍🏻");
})
.catch((e) => console.log("whoopsie!", e));