"use server";

import { ENVVARIABLES } from "@/components/types/types";

export async function getEnv(): Promise<ENVVARIABLES> {
  return {
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY!,
  };
}
