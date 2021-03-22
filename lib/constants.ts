/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://modernwebconference.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'modernwebcon';
export const BRAND_NAME = 'Modern Web Conference';
export const SITE_NAME_MULTILINE = ['Modern Web Conference', 'Conf'];
export const SITE_NAME = 'Modern Web Conference';
export const META_DESCRIPTION =
  "Summer 2021. Two weeks, 10 tracks, 100+ sessions. A free online conference that's more than just a livestream.";
export const SITE_DESCRIPTION = 'A Free Conference for the Web Community';
export const DATE = 'Summer 2021';
export const SHORT_DATE = 'Summer 2021';
export const FULL_DATE = 'Two weeks this summer 2021';
export const TWEET_TEXT = `Join me at the @ModernWebCon this summer! Click here to register free`;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/eventloopai/Modern-Web-Conference-Code-of-Conduct-05772283cc97450981bde84dba7be46a';
export const REPO = 'https://github.com/vercel/virtual-event-starter-kit';
export const BECOME_A_SPONSOR =
  'https://www.notion.so/Modern-Web-Conference-May-2021-Sponsorship-Guide-8b1bbc71547c45e1b7e14782228b311e';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  }
];

export type TicketGenerationState = 'default' | 'loading';
