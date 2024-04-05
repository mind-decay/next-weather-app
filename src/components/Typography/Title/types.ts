export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TitleVariants = Exclude<TitleTags, 'h5' | 'h6'>;

export type StylesType = Readonly<Record<string, string>>;
