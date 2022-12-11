const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Meltdown";
const description = "Be a part of the post-apocalyptic Meltdown world. Choose your side! Will you be a Survivor and try to get inside the Safezone? Or be a Bandit and try to stop them?";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "MELTDOWN",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [

  // Bandit Female cast
  {
    growEditionSizeTo: 833,
    layersOrder: [
      { name: "Bandit Female/Ground" },
      { name: "Bandit Female/Beast" },
      { name: "Bandit Female/Body" },
      { name: "Bandit Female/Bottom Wear" },
      { name: "Bandit Female/Upper Wear" },
      { name: "Bandit Female/Right Hand Gear" },
      { name: "Bandit Female/Left Hand Gear" },
      { name: "Bandit Female/Head" },
      { name: "Bandit Female/Atmosphere Effect" },
    ],
  },

  // Bandit Male cast
  {
    growEditionSizeTo: 1666,
    layersOrder: [
      { name: "Bandit Male/Ground" },
      { name: "Bandit Male/Beast" },
      { name: "Bandit Male/Body" },
      { name: "Bandit Male/Bottom Wear" },
      { name: "Bandit Male/Upper Wear" },
      { name: "Bandit Male/Right Hand Gear" },
      { name: "Bandit Male/Left Hand Gear" },
      { name: "Bandit Male/Head" },
      { name: "Bandit Male/Atmosphere Effect" },
    ],
  },

  // Survivor Female cast
  { // Normal wear
    growEditionSizeTo: 2359,
    layersOrder: [
      { name: "Survivor Female/Ground" },
      { name: "Survivor Female/Dog" },
      { name: "Survivor Female/Body" },
      { name: "Survivor Female/Right Hand Gear" },
      { name: "Survivor Female/Left Hand Gear" },
      { name: "Survivor Female/Bottom Wear" },
      { name: "Survivor Female/Upper Wear" },
      { name: "Survivor Female/Sunglasses" },
      { name: "Survivor Female/Head" },
      { name: "Survivor Female/Atmosphere Effect" },
    ],
  },
  { // Full body wear (15-20% of cast)
    growEditionSizeTo: 2499,
    layersOrder: [
      { name: "Survivor Female/Ground" },
      { name: "Survivor Female/Dog" },
      { name: "Survivor Female/Body" },
      { name: "Survivor Female/Right Hand Gear" },
      { name: "Survivor Female/Left Hand Gear" },
      { name: "Survivor Female/Full Body Wear" },
      { name: "Survivor Female/Atmosphere Effect" },
    ],
  },

  // Survivor Male cast
  { // Normal wear
    growEditionSizeTo: 3193,
    layersOrder: [
      { name: "Survivor Male/Ground" },
      { name: "Survivor Male/Dog" },
      { name: "Survivor Male/Body" },
      { name: "Survivor Male/Right Hand Gear" },
      { name: "Survivor Male/Left Hand Gear" },
      { name: "Survivor Male/Bottom Wear" },
      { name: "Survivor Male/Upper Wear" },
      { name: "Survivor Male/Head" },
      { name: "Survivor Male/Atmosphere Effect" },
    ],
  },
  { // Full body wear (15-20% of cast)
    growEditionSizeTo: 3333,
    layersOrder: [
      { name: "Survivor Male/Ground" },
      { name: "Survivor Male/Dog" },
      { name: "Survivor Male/Body" },
      { name: "Survivor Male/Right Hand Gear" },
      { name: "Survivor Male/Left Hand Gear" },
      { name: "Survivor Male/Full Body Wear" },
      { name: "Survivor Male/Atmosphere Effect" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = true;

const format = {
  width: 6360,
  height: 8000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: true,
  default: "#f8f3f2",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
