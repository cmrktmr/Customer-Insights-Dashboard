# Customer Insights Dashboard

## Overview
The Customer Insights Dashboard is a comprehensive web application designed to provide businesses with valuable insights into their customer interactions, sales data, and overall performance. It offers a rich set of analytics and data visualization components to help companies understand their market position, optimize their sales strategies, and improve customer satisfaction.

## Live Demo

You can try out the live version of the Customer Insights Dashboard here: [https://customerinsightsdash.netlify.app/login](https://customerinsightsdash.netlify.app/login)

Feel free to explore the features and functionalities of the dashboard. This version is deployed on Netlify and reflects the latest state of the project.

## Project Structure

### `src` Directory
- **Components:** Reusable UI elements and widgets tailored for displaying various analytics and insights.
  - **Dashboard Components:**
    - `Dashboard.js`: The main dashboard component, likely serving as the central hub for displaying various analytics and insights widgets.
    - `Dashboard.test.js`: Unit tests for the Dashboard component, ensuring its reliability and functionality.
  - **Analytics and Widgets:**
    - `bestSellingProduct/`: Contains components related to displaying the best-selling product(s).
      - `BestSellingProductWidget.js`: Displays the best-selling product analytics.
      - `BestSellingProductWidget.test.js`: Tests for the best-selling product widget.
    - `callCenter/`: Components for call center analytics.
      - `CallCenterAnalytics.js`: Analyzes and displays call center metrics.
    - `infoCard/`: A generic component for displaying information cards.
      - `InfoCardWidget.js`: A widget for displaying key information in a card format.
    - `login/`: Components related to user authentication.
      - `Login.js`: A component for the login interface.
    - `mostSellingChannel/`: Displays analytics on the most selling channel.
      - `MostSellingChannelWidget.js`: Component for most selling channel analytics.
      - `MostSellingChannel.test.js`: Tests for the most selling channel component.
    - `paginatedTable/`: For displaying data in a paginated table format.
      - `PaginatedTable.js`: Implements a paginated table.
      - `PaginatedTable.test.js`: Unit tests for the paginated table component.
    - `pieChart/`: A component for rendering pie charts.
      - `PieChart.js`: Renders pie charts for visual analytics.
    - `promoCodeWidget/`: Components for managing promotional codes.
      - `PromoCodeWidget.js`, `PromoCodeForm.js`, `PromoCodeList.js`: Components for creating, displaying, and listing promo codes.
    - `register/`: Contains registration component.
      - `register.js`: A component for new user registration.
    - `totalRevenue/`: Widget for displaying total revenue.
      - `TotalRevenueWidget.js`: Shows total revenue analytics.
  - **Common Components:**
    - `footer/`: Contains the footer component for the application.
      - `Footer.js`: The footer component, likely containing copyright and other general information.
    - `header/`: Contains the header component, including navigation links.
      - `Header.js`: The main header component for the application.
- **Context:** Contains React context providers for global state management, including authentication and data management.
  - `AuthContext.js`: Manages authentication state across the application.
  - `DataContext.js`: Provides a centralized state management solution for data consumed across different parts of the application.
- **Hooks:** Custom React hooks for fetching data, managing form state, and other reusable logic.
  - `useFetchData.js`: A hook for fetching data from an API, abstracting away common concerns like loading and error handling.
  - `useForm.js`: Manages form state and handling, simplifying form validation and submission.
- **Utils:** Utility functions for pagination, calculations, and other common tasks.
  - `paginationHelper.js`: Contains logic for paginating data, likely used in conjunction with components like PaginatedTable.
  - `calculateBestSeller.js`: A utility function for calculating the best-selling product, potentially used in the best-selling product widget.

## Features

- **Dashboard Interface:** A user-friendly dashboard displaying key metrics and insights.
- **Data Visualization:** Pie charts, info cards, and widgets to visually represent data.
- **Authentication:** Secure login and registration components.
- **Analytics Widgets:** Detailed analytics on sales, customer interactions, and performance metrics.
- **Responsive Design:** A layout that adjusts to different screen sizes for optimal viewing experience.
- **Mock Data Usage:** We use fake data to show how things work. This helps us test and develop the website without needing real data from customers.

## Example of a Response

```json
{
    "sales_id": 34,
    "sales_date": "1/15/2023",
    "product_name": "Product E",
    "quantity_sold": 263,
    "unit_price": 40.31,
    "total_revenue": 72.93,
    "sales_channel": "Mobile App",
    "averageCall_duration": 31,
    "resolution_rate": 93.87,
    "averageWaiting_time": 32,
    "customerSatisfactionRate": 22.02,
    "total_calls": 821
}
```

## Data Storage

In this project, we use the browser's `localStorage` to store user information and promotional codes. Here's how we use it:
- **User Information:** When a user signs up or logs in, we save their information in `localStorage`. This makes it easier for users to stay logged in when they return to the site.
- **Promotional Codes:** We also save promotional codes that users can apply to their purchases. This allows us to keep track of which codes have been used and provide a better shopping experience.

## Testing

This project uses Jest for testing. We have customized the test command for convenience. To run the tests, simply execute the following command in your terminal: `npm jest`. This command will run all the test cases using Jest. Make sure you're in the project directory before running the test command.



## Getting Started

1. Ensure you have Node.js installed on your machine.
2. Clone the repository to your local machine.
3. Navigate to the project directory and run `npm install` to install dependencies.
4. After installation, run `npm start` to launch the application on a local server.
5. Visit `http://localhost:3000` in your browser to view the dashboard.


## Contribution

Contributions to the Customer Insights Dashboard are welcome. Please follow the standard fork-and-pull request workflow. Make sure to add unit tests for new features and run existing tests to ensure your changes do not break any existing functionality.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
