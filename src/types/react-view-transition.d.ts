// React's <ViewTransition> ships in the canary build the Next.js App Router
// vendors (verified in next/dist/compiled/react), but @types/react@19 does not
// declare it yet. Minimal props per https://react.dev/reference/react/ViewTransition
// — delete this file once the types catch up.
import "react";

declare module "react" {
  type ViewTransitionClass = string | Record<string, string>;

  interface ViewTransitionProps {
    children?: ReactNode;
    name?: string;
    default?: ViewTransitionClass;
    enter?: ViewTransitionClass;
    exit?: ViewTransitionClass;
    share?: ViewTransitionClass;
    update?: ViewTransitionClass;
  }

  export function ViewTransition(props: ViewTransitionProps): ReactNode;
}
