type Options = {
  /**
   * called once the event is logged successfully.
   */
  callback?: () => void;
  /**
   * custom properties for the event
   */
  props?: Record<string, string | number | undefined | null>;
};

interface Window {
  plausible: (event: 'add_fox' | 'remove_fox', options?: Options) => void;
}