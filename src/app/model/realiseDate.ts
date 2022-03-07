export interface ReleaseDate {
  id: number;
  results: ResultData[];
}

export interface ResultData {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDate {
  certification: string;
  iso_639_1: ISO639_1 | null;
  note: Note;
  release_date: Date;
  type: number;
}

export enum ISO639_1 {
  CS = 'cs',
  Empty = '',
}

export enum Note {
  DVDBluRay4KUHD = 'DVD, Blu-ray, 4K UHD',
  Empty = '',
  LosAngelesCalifornia = 'Los Angeles, California',
  NoteDVDBluRay4KUHD = 'DVD, Blu-Ray & 4K UHD',
  The4KUHDBluRayDVD = '4K UHD, Blu-ray & DVD',
  VOD = 'VOD',
}
