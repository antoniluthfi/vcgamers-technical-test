type GeneralData = {
  name: string;
  url: string;
};

type Abilities = {
  ability: GeneralData;
  is_hidden: false;
  slot: number;
};

type GameIndices = {
  game_index: number;
  version: GeneralData;
};

type HeldItems = {
  item: GeneralData;
  version_details: {
    rarity: number;
    version: GeneralData;
  };
};

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: GeneralData;
  version_group: GeneralData;
};

type Moves = {
  move: GeneralData;
  version_group_details: VersionGroupDetails[];
};

type PastTypes = {
  generation: GeneralData;
  types: {
    slot: number;
    type: GeneralData;
  };
};

type SpritesOther = {
  dream_world: {
    front_default: string;
    front_female: string;
  };
  home: {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  'official-artwork': {
    front_default: string;
    front_shiny: string;
  };
};

type Spritesversion = {
  'generation-i': {
    'red-blue': {
      back_default: string;
      back_gray: string;
      back_transparent: string;
      front_default: string;
      front_gray: string;
      front_transparent: string;
    };
    yellow: {
      back_default: string;
      back_gray: string;
      back_transparent: string;
      front_default: string;
      front_gray: string;
      front_transparent: string;
    };
  };
  'generation-ii': {
    crystal: {
      back_default: string;
      back_shiny: string;
      back_shiny_transparent: string;
      back_transparent: string;
      front_default: string;
      front_shiny: string;
      front_shiny_transparent: string;
      front_transparent: string;
    };
    gold: {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
      front_transparent: string;
    };
    silver: {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
      front_transparent: string;
    };
  };
  'generation-iii': {
    emerald: {
      front_default: string;
      front_shiny: string;
    };
    'firered-leafgreen': {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
    };
    'ruby-sapphire': {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
    };
  };
  'generation-iv': {
    'diamond-pearl': {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    'heartgold-soulsilver': {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    platinum: {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
  };
  'generation-v': {
    'black-white': {
      animated: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
  };
  'generation-vi': {
    'omegaruby-alphasapphire': {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    'x-y': {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
  };
  'generation-vii': {
    icons: {
      front_default: string;
      front_female: string;
    };
    'ultra-sun-ultra-moon': {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
  };
  'generation-viii': {
    icons: {
      front_default: string;
      front_female: string;
    };
  };
};

type Sprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: SpritesOther;
  versions: Spritesversion;
};

type Stats = {
  base_stat: number;
  effort: number;
  stat: GeneralData;
};

type Types = {
  slot: number;
  type: GeneralData;
};

type PokemonDetailData = {
  abilities: Abilities[];
  base_experience: number;
  forms: GeneralData[];
  game_indices: GameIndices[];
  height: number;
  held_items: HeldItems;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_types: PastTypes[];
  species: GeneralData;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
};
