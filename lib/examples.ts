export const examples = {
  basic: `# Basic Markdown Example

## Text Formatting

This is a paragraph with **bold text** and *italic text*. You can also use ~~strikethrough~~ text.

## Lists

### Unordered List
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

## Links and Images

[Visit GitHub](https://github.com)

![Sample Image](https://picsum.photos/200/100)

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

## Code

Inline code: \`console.log('Hello World!')\`

Code block:
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));
\`\`\`

## Tables

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
`,

  report: `# Quarterly Sales Report
## Q4 2023

### Executive Summary

This report presents the sales performance for Q4 2023. Overall, we've seen a **15% increase** in revenue compared to Q3 2023.

### Key Metrics

1. Revenue: $2.5M
2. New Customers: 450
3. Customer Retention: 92%

### Revenue Breakdown

\`\`\`javascript
const revenueData = {
  product_sales: 1500000,
  services: 800000,
  subscriptions: 200000
};

const total = Object.values(revenueData)
  .reduce((sum, val) => sum + val, 0);
\`\`\`

### Regional Performance

| Region    | Revenue   | Growth |
|-----------|-----------|--------|
| North     | $800K     | +18%   |
| South     | $600K     | +12%   |
| East      | $700K     | +15%   |
| West      | $400K     | +10%   |

### Recommendations

> Focus on West region in Q1 2024 to improve performance
> Expand product line based on customer feedback

### Next Steps

- [ ] Review regional strategies
- [ ] Implement new pricing model
- [ ] Launch customer feedback program

### Appendix

For detailed numbers, please refer to the attached spreadsheets.
`,

  documentation: `# API Documentation

## Getting Started

First, install the package:

\`\`\`bash
npm install @example/sdk
\`\`\`

Then initialize the client:

\`\`\`javascript
import { Client } from '@example/sdk';

const client = new Client({
  apiKey: 'YOUR_API_KEY'
});
\`\`\`

## Authentication

All API requests require authentication using an API key.

### Headers

Required headers for all requests:

\`\`\`
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
\`\`\`

## Endpoints

### GET /api/users

Returns a list of users.

**Parameters:**
- \`limit\` (optional): Maximum number of users to return
- \`offset\` (optional): Pagination offset

**Response:**
\`\`\`json
{
  "users": [
    {
      "id": "123",
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "total": 100,
  "limit": 10,
  "offset": 0
}
\`\`\`

### POST /api/users

Creates a new user.

**Request Body:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user"
}
\`\`\`

## Error Handling

The API uses conventional HTTP response codes:

- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

## Rate Limiting

- Rate limit: 100 requests per minute
- Rate limit header: \`X-RateLimit-Limit\`
- Remaining requests: \`X-RateLimit-Remaining\`
`,
};
