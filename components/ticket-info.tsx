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

import styles from './ticket-info.module.css';
import styleUtils from './utils.module.css';
import { DATE } from '@lib/constants';
import EventLoopLogo from '@components/logos/EventLoopLogo';
import MiniLogo from '@components/logos/MiniLogo';

export default function TicketInfo() {
  const createdBy = (
    <div className={styles['created-by']}>
      <div className={styles['created-by-text']}>Hosted on </div>
      <div className={styles['created-by-logo']}>
        <EventLoopLogo height="100%" color="var(--accents-4)" />
      </div>
    </div>
  );
  return (
    <div className={styles.info}>
      <div className={styles.logo}>
        <MiniLogo />
      </div>
      <div className={styles.date}>
        <div>{DATE}</div>
        <div>ONLINE</div>
      </div>
      <div className={styleUtils['hide-on-mobile']}>{createdBy}</div>
      <div className={styles.url}>ModernWebConference.com</div>
      <div className={styleUtils['show-on-mobile']}>{createdBy}</div>
    </div>
  );
}
