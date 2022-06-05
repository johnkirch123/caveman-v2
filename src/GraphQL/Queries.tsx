import { gql } from '@apollo/client';

export const LOAD_COLLECTIONS = gql`
  query GetAllCollections {
    listListings(
      filters: { marketplaceApproved: true }
      pagination: { limit: 500 }
      sort: HIGHEST_DAILY_VOLUME
    ) {
      results {
        name
        rank
        imageUrl
        totalVolume
        dailyChange
        dailyVolume
        weeklyChange
        weeklyVolume
        floorPrice
        websiteLink
        collectionTicker
        description
        discordLink
        twitterLink
        stats {
          allTimeStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
          weekStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
          previousWeekStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
          dayStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
          previousDayStats {
            averagePrice
            totalPrice
            highestPrice
            totalSales
          }
        }
      }
      count: count
    }
  }
`;
