import React from 'react';
import logo from '../../assets/img/elrond-logo.png';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';

interface IProps {
  collection: {
    imageUrl: string;
    name: string;
    rank: number;
    collectionTicker: string;
    description: string;
    floorPrice: number;
    dailyVolume: number;
    dailyChange: number;
    stats: {
      allTimeStats: {
        averagePrice: number;
        totalPrice: number;
        highestPrice: number;
        totalSales: number;
      };
      dayStats: {
        averagePrice: number;
        totalPrice: number;
        highestPrice: number;
        totalSales: number;
      };
      previousDayStats: {
        averagePrice: number;
        totalPrice: number;
        highestPrice: number;
        totalSales: number;
      };
      weekStats: {
        averagePrice: number;
        totalPrice: number;
        highestPrice: number;
        totalSales: number;
      };
      previousWeekStats: {
        averagePrice: number;
        totalPrice: number;
        highestPrice: number;
        totalSales: number;
      };
    };
    twitterLink: string;
    discordLink: string;
    websiteLink: string;
  };
}

const CollectionItem: React.FC<IProps> = ({ collection }) => {
  const {
    allTimeStats,
    dayStats,
    previousDayStats,
    weekStats,
    previousWeekStats
  } = collection.stats;

  const truncate = (str: string, n: number): string => {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div className='collection__item' key={collection.rank}>
      <div className='collection__image-rank'>
        <p className='collection__rank'>#{collection.rank}</p>
        <div className='collection__image--box'></div>
        <img
          className='collection__image'
          src={collection.imageUrl}
          alt={collection.name}
        />
      </div>
      <div className='collection__center-grids'>
        <div className='collection__data'>
          <div className='collection__header'>
            <p className='collection__name'>{collection.name}</p>
            <p className='collection__ticker'>
              ({collection.collectionTicker})
            </p>
            <p className='collection__desc'>
              {truncate(collection.description, 50)}
            </p>
          </div>
          <div className='collection__fp-dv'>
            <div className='collection__floor-price'>
              <p className='collection__floor-price--title'>FP: &nbsp;</p>
              <p className='collection__floor-price--value'>
                {collection.floorPrice} &nbsp;
              </p>
              <img src={logo} alt='elrond logo' className='elrond__logo' />
            </div>
            <div className='collection__daily-volume'>
              <p className='collection__daily-volume--title'>
                Daily Volume: &nbsp;
              </p>
              <p className='collection__daily-volume--value'>
                {collection.dailyVolume.toFixed(2)} &nbsp;
              </p>
              <img src={logo} alt='elrond logo' className='elrond__logo' />
              &nbsp;
              <p
                className={`collection__daily-volume--change ${
                  collection.dailyChange > 1 ? 'green' : 'red'
                }`}
              >
                {parseFloat(collection.dailyChange.toFixed(2)) > 1
                  ? ((collection.dailyChange - 1) * 100).toFixed(2)
                  : ((1 - collection.dailyChange) * 100).toFixed(2)}
                &nbsp; %
              </p>
            </div>
          </div>
        </div>
        <div className='collection__stats'>
          <p id='collection__titles' className='grid__items'>
            Stats
          </p>
          <p id='collection__titles' className='grid__items'>
            Avg $
          </p>
          <p id='collection__titles' className='grid__items'>
            Tot $
          </p>
          <p id='collection__titles' className='grid__items'>
            ATH
          </p>
          <p id='collection__titles' className='grid__items'>
            Total
          </p>

          <p id='collection__titles' className='grid__items'>
            All
          </p>
          <div className='grid__items'>
            <p>{allTimeStats?.averagePrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{allTimeStats?.totalPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{allTimeStats?.highestPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{allTimeStats?.totalSales.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>

          <p id='collection__titles' className='grid__items'>
            Day
          </p>
          <div className='grid__items'>
            <p>{dayStats?.averagePrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{dayStats?.totalPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{dayStats?.highestPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{dayStats?.totalSales.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>

          <p id='collection__titles' className='grid__items'>
            Prev D
          </p>
          <div className='grid__items'>
            <p>{previousDayStats?.averagePrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{previousDayStats?.totalPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{previousDayStats?.highestPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{previousDayStats?.totalSales.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>

          <p id='collection__titles' className='grid__items'>
            Week
          </p>
          <div className='grid__items'>
            <p>{weekStats?.averagePrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{weekStats?.totalPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{weekStats?.highestPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{weekStats?.totalSales.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>

          <p id='collection__titles' className='grid__items'>
            Prev W
          </p>
          <div className='grid__items'>
            <p>{previousWeekStats?.averagePrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{previousWeekStats?.totalPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{previousWeekStats?.highestPrice.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
          <div className='grid__items'>
            <p>{previousWeekStats?.totalSales.toFixed(1) || 0}</p>&nbsp;
            <img src={logo} alt='elrond logo' className='elrond__logo' />
          </div>
        </div>
      </div>
      <div className='collection__social'>
        <a
          className='collection__link'
          href={collection.twitterLink}
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter className='collection__icon' />
        </a>
        <a
          className='collection__link'
          href={collection.discordLink}
          target='_blank'
          rel='noreferrer'
        >
          <FaDiscord className='collection__icon' />
        </a>
        <a
          className='collection__link'
          href={collection.websiteLink}
          target='_blank'
          rel='noreferrer'
        >
          <MdWeb className='collection__icon' />
        </a>
      </div>
    </div>
  );
};

export default CollectionItem;
