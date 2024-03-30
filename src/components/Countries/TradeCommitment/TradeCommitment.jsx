import React from 'react';

import styles from './TradeCommitment.module.css';

function TradeCommitment() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3>Nigeria&apos;s Commitment to Regional Trade</h3>
        <br />
        <section>
          <div>
            <span className={styles.heading}>-Nigeria&apos;s Diplomatic Alliances: </span>Nigeria is
            part of two Regional Economic (RECs) - the Economic Community of West Africa (ECOWAS)
            and the Community of Sahel-Saharan States (CEN-SAD). Nigeria deposited its instrument of
            ratification and schedule of tariff concessions, along with other ECOWAS member states.
          </div>
        </section>
        <br />
        <section>
          <div>
            <span className={styles.heading}>-ECOWAS Trade Commitments:</span> As of 2020, the
            African Union recognizes 8 Regional Economic Communities, with Nigeria being a member of
            two: the Community of Sahel–Saharan States (CEN–SAD) and the Economic Community of West
            African States (ECOWAS). These communities foster regional trade through various
            agreements, with ECOWAS specifically having multiple trade instruments and engaging in
            multilateral, continental, and bilateral trade agreements at both regional and
            international levels.
          </div>
        </section>
        <br />
        <section>
          <div>
            <span className={styles.heading}>-AFCFTA Barrier Resolution: </span>The African
            Continental Free Trade Area (AfCFTA) has implemented an online reporting, monitoring,
            and elimination mechanism for barriers to trade (NTBs). Through the platform at
            <a href="https://tradebarriers.africa"> https://tradebarriers.africa</a>, individuals
            and businesses can report obstacles encountered during trade within Africa, such as
            delays, delays, ad hoc fees, document requirements, and product standards. This
            mechanism is welcoming participation from all sectors, including small, medium, and
            large companies, informal traders, as well as women and youth business operators. Watch
            an introductory video about the initiative at{' '}
            <a href="https://tradebarriers.africa/about">https://tradebarriers.africa/about</a>.
          </div>
        </section>
        <br />
        <section>
          <div>
            <span className={styles.heading}>-Trade Report: </span> Leading intra-African trading
            nation in 2021: <br />
            1. South Africa <br />
            2. DRC(largest intra-African trading nation in Central Africa) <br />
            3. Nigeria <br />
            4. Algeria <br />
            ~African Trade Report 2022
          </div>
        </section>
        <br />
      </div>
    </div>
  );
}

export default TradeCommitment;
