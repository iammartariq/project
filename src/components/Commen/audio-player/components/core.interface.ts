export interface AudioInterface {
  autoPlay?: boolean;
  className?: string;
  classNames?: string;
  src: string;
  item?: { premium: true, preview: null, title: null, album: { title: null } };
  subscriptionStatus?: string;
  loop?: boolean;
  isLock?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  backgroundColor?: string;
  color?: string;
  width?: number | string;
  style?: React.CSSProperties;
  sliderColor?: string;
  volume?: number;
  volumePlacement?: 'top' | 'bottom';
  hasKeyBindings?: boolean;
  needControls?: boolean;
  needVolumes?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
  onLock?: () => void;
  onError?: (event: React.SyntheticEvent<HTMLAudioElement, Event>, errorMessage: string) => void;
}

export interface AudioPlayerRef {
  play: () => void;
  pause: () => void;
  stop: () => void;
  focus: () => void;
}
