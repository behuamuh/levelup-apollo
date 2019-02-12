export type Maybe<T> = T | null;

export interface AssetWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AssetWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<AssetWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AssetWhereInput[]>;

  status?: Maybe<Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  handle?: Maybe<string>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<string>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  handle_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  handle_lte?: Maybe<string>;
  /** All values greater than the given value. */
  handle_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  handle_gte?: Maybe<string>;
  /** All values containing the given string. */
  handle_contains?: Maybe<string>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  handle_not_ends_with?: Maybe<string>;

  fileName?: Maybe<string>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<string>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  fileName_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  fileName_lte?: Maybe<string>;
  /** All values greater than the given value. */
  fileName_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  fileName_gte?: Maybe<string>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<string>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  fileName_not_ends_with?: Maybe<string>;

  height?: Maybe<number>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<number>;
  /** All values that are contained in given list. */
  height_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  height_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<number>;
  /** All values greater than the given value. */
  height_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<number>;

  mimeType?: Maybe<string>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<string>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  mimeType_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  mimeType_lte?: Maybe<string>;
  /** All values greater than the given value. */
  mimeType_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  mimeType_gte?: Maybe<string>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<string>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  mimeType_not_ends_with?: Maybe<string>;

  size?: Maybe<number>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<number>;
  /** All values that are contained in given list. */
  size_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  size_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<number>;
  /** All values greater than the given value. */
  size_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<number>;

  width?: Maybe<number>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<number>;
  /** All values that are contained in given list. */
  width_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  width_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<number>;
  /** All values greater than the given value. */
  width_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<number>;
}
/** Transformations for Assets */
export interface AssetTransformationInput {
  image?: Maybe<ImageTransformationInput>;

  document?: Maybe<DocumentTransformationInput>;
  /** Pass `true` if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<boolean>;
}
/** Transformations for Images */
export interface ImageTransformationInput {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
}

export interface ImageResizeInput {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<number>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<number>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
}
/** Transformations for Documents */
export interface DocumentTransformationInput {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
}

export interface DocumentOutputInput {
  /** Transforms a document into a desired file type. See this matrix for format support: PDF:	jpg, odp, ods, odt, png, svg, txt, and webp DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp XLS:	jpg, pdf, ods, png, svg, xlsx, and webp XLSX:	jpg, pdf, ods, png, svg, xls, and webp ODS:	jpg, pdf, png, xls, svg, xlsx, and webp PPT:	jpg, odp, pdf, png, svg, pptx, and webp PPTX:	jpg, odp, pdf, png, svg, ppt, and webp ODP:	jpg, pdf, png, ppt, svg, pptx, and webp BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp SVG:	jpg, odp, ods, odt, pdf, png, and webp HTML:	jpg, odt, pdf, svg, txt, and webp TXT:	jpg, html, odt, pdf, svg, and webp */
  format?: Maybe<DocumentFileTypes>;
}

export interface ColorWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ColorWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ColorWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ColorWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface LocationWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<LocationWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<LocationWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LocationWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;
}

export interface PostWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PostWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PostWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PostWhereInput[]>;

  status?: Maybe<Status>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Status[]>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Status[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  title?: Maybe<string>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<string>;
  /** All values that are contained in given list. */
  title_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  title_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<string>;
  /** All values greater than the given value. */
  title_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<string>;
  /** All values containing the given string. */
  title_contains?: Maybe<string>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<string>;

  body?: Maybe<string>;
  /** All values that are not equal to given value. */
  body_not?: Maybe<string>;
  /** All values that are contained in given list. */
  body_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  body_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  body_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  body_lte?: Maybe<string>;
  /** All values greater than the given value. */
  body_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  body_gte?: Maybe<string>;
  /** All values containing the given string. */
  body_contains?: Maybe<string>;
  /** All values not containing the given string. */
  body_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  body_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  body_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  body_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  body_not_ends_with?: Maybe<string>;
}

export interface AssetWhereUniqueInput {
  id?: Maybe<string>;

  handle?: Maybe<string>;
}

export interface ColorWhereUniqueInput {
  id?: Maybe<string>;
}

export interface LocationWhereUniqueInput {
  id?: Maybe<string>;
}

export interface PostWhereUniqueInput {
  id?: Maybe<string>;
}

export interface AssetCreateInput {
  status?: Maybe<Status>;

  handle: string;

  fileName: string;

  height?: Maybe<number>;

  mimeType?: Maybe<string>;

  size?: Maybe<number>;

  width?: Maybe<number>;
}

export interface PostCreateInput {
  status?: Maybe<Status>;

  title?: Maybe<string>;

  body?: Maybe<string>;
}

export interface AssetUpdateInput {
  status?: Maybe<Status>;

  handle?: Maybe<string>;

  fileName?: Maybe<string>;

  height?: Maybe<number>;

  mimeType?: Maybe<string>;

  size?: Maybe<number>;

  width?: Maybe<number>;
}

export interface PostUpdateInput {
  status?: Maybe<Status>;

  title?: Maybe<string>;

  body?: Maybe<string>;
}

export interface AssetUpdateManyMutationInput {
  status?: Maybe<Status>;

  handle?: Maybe<string>;

  fileName?: Maybe<string>;

  height?: Maybe<number>;

  mimeType?: Maybe<string>;

  size?: Maybe<number>;

  width?: Maybe<number>;
}

export interface PostUpdateManyMutationInput {
  status?: Maybe<Status>;

  title?: Maybe<string>;

  body?: Maybe<string>;
}

export interface AssetSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AssetSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<AssetSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<AssetSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<AssetWhereInput>;
}

export interface ColorSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<ColorSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<ColorSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<ColorSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<ColorWhereInput>;
}

export interface LocationSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<LocationSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<LocationSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<LocationSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<LocationWhereInput>;
}

export interface PostSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<PostSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<PostSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<PostSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<PostWhereInput>;
}

export enum Status {
  Draft = "DRAFT",
  Published = "PUBLISHED",
  Archived = "ARCHIVED"
}

export enum AssetOrderByInput {
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC"
}

export enum ImageFit {
  Clip = "clip",
  Crop = "crop",
  Scale = "scale",
  Max = "max"
}

export enum DocumentFileTypes {
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Png = "png",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Docx = "docx",
  Html = "html",
  Pdf = "pdf",
  Doc = "doc",
  Xlsx = "xlsx",
  Xls = "xls",
  Pptx = "pptx",
  Ppt = "ppt"
}

export enum ColorOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export enum LocationOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export enum PostOrderByInput {
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  BodyAsc = "body_ASC",
  BodyDesc = "body_DESC"
}

export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED"
}

export enum Locale {
  En = "EN"
}

export type DateTime = any;

/** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;
