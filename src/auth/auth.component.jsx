"use client";

import Private from "./private.component";
import OnlyPublic from "./only-public.component";
import AUTH from "@/common/constants/auth.constant";

export default function Auth({ component, type = AUTH.PUBLIC }) {
  switch (type) {
    case AUTH.PUBLIC:
      return <div>{component}</div>;
    case AUTH.PRIVATE:
      return <Private component={component} />;
    case AUTH.ONLY_PUBLIC:
      return <OnlyPublic component={component} />;
  }
}