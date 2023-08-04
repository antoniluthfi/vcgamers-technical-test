type GeneralData = {
  name: string;
  url: string;
};

type Abilities = {
  ability: GeneralData;
  is_hidden: boolean;
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

type PokedexNumber = {
  entry_number: number;
  pokedex: GeneralData;
};

type Names = {
  name: string;
  language: GeneralData;
};

type FlavorTextEntries = {
  flavor_text: string;
  language: GeneralData;
  version: GeneralData;
};

type FormDescription = {
  description: string;
  language: GeneralData;
};

type Genera = {
  genus: string;
  language: GeneralData;
};

type Varieties = {
  is_default: boolean;
  pokemon: GeneralData;
};

type SpeciesData = {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: GeneralData;
  pokedex_numbers: PokedexNumber[];
  egg_groups: GeneralData[];
  color: GeneralData;
  shape: GeneralData;
  evolves_from_species: GeneralData;
  evolution_chain: {
    url: string;
  };
  habitat: string | null;
  generation: GeneralData;
  names: Names[];
  flavor_text_entries: FlavorTextEntries[];
  form_descriptions: FormDescription[];
  genera: Genera[];
  varieties: Varieties[];
};

type EvolutionDetail = {
  item: string | null;
  trigger: GeneralData;
  gender: string | null;
  held_item: string | null;
  known_move: string | null;
  known_move_type: string | null;
  location: string | null;
  min_level: number;
  min_happiness: string | null;
  min_beauty: string | null;
  min_affection: string | null;
  needs_overworld_rain: boolean;
  party_species: string | null;
  party_type: string | null;
  relative_physical_stats: string | null;
  time_of_day: string;
  trade_species: string | null;
  turn_upside_down: boolean;
}

type EvolvesTo = {
  is_baby: boolean;
  species: GeneralData;
  evolution_details: EvolutionDetail[];
  evolves_to: any[];
}

type EvolutionChain = {
  id: number;
  baby_trigger_item: string | null;
  chain: {
    is_baby: boolean;
    species: GeneralData;
    evolution_details: string | null;
    evolves_to: EvolvesTo[];
  };
};
