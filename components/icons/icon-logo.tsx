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

export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--accents-1)',
  ...props
}) {
    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 18 19"
    >
      <path
        fill="#fff"
        d="M14.289 5.017l1.503.868v7.853L8.99 17.665l-.757-.437V4.092l-1.514.874v11.388l-1.514-.874V5.84l-1.513.874v7.892l-1.503-.868V5.885L8.99 1.958l.757.437v13.146l1.514-.874V3.27l1.514.874v9.65l1.514-.874V5.017z"
      ></path>
    </svg>
  );
}
