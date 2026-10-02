# 14 — TESTING & CODE QUALITY

## Purpose

This document defines the mandatory testing and code-quality standards for the website.

The AI coding agent MUST treat testing and code quality as part of implementation, not as optional work performed after development.

A feature is NOT considered complete until it has been reviewed for:

- Functional correctness
- UI correctness
- Responsive behavior
- Accessibility
- API behavior
- Authentication and authorization
- Error handling
- Loading and empty states
- Performance
- Code quality
- Browser compatibility
- Edge cases

---

# 1. Core Testing Principle

Every feature must be tested from the perspective of a real user.

Do not only test:

> "Does the code run?"

Also test:

> "Does the user experience work correctly when everything goes right, when something goes wrong, and when the user behaves unexpectedly?"

Use this general flow:

```text
Requirement
    ↓
Implementation
    ↓
Happy Path Test
    ↓
Negative / Error Test
    ↓
Edge Case Test
    ↓
Responsive Test
    ↓
Accessibility Test
    ↓
Performance Check
    ↓
Code Quality Review
    ↓
Feature Complete
```

---

# 2. Testing Levels

Use the appropriate testing level depending on the feature.

## 2.1 Unit Testing

Use unit tests for isolated logic such as:

- Utility functions
- Data transformations
- Validation functions
- Formatting functions
- Business rules
- Calculations
- Hooks where appropriate

A unit test should test one logical behavior at a time.

### Example

```text
Input
  ↓
Function
  ↓
Expected Output
```

Test both valid and invalid inputs.

---

## 2.2 Component / UI Testing

Test reusable UI components independently where practical.

Examples:

- Button
- Input
- Modal
- Dropdown
- Form
- Card
- Table
- Navigation
- Pagination
- Search
- Filter

Verify:

- Rendering
- Props
- User interaction
- Disabled states
- Loading states
- Error states
- Accessibility behavior

---

## 2.3 Integration Testing

Test interactions between multiple parts of the system.

Examples:

```text
Form
 ↓
Frontend Validation
 ↓
API Request
 ↓
Backend Validation
 ↓
Database
 ↓
API Response
 ↓
UI Update
```

Integration tests should verify that connected components behave correctly together.

---

## 2.4 API Testing

Every important API endpoint should be tested.

Test:

- Correct HTTP method
- Correct request body
- Correct parameters
- Authentication
- Authorization
- Validation
- Success response
- Error response
- Status code
- Response schema
- Missing data
- Invalid data
- Unauthorized requests
- Forbidden requests
- Not-found cases
- Duplicate records
- Server-side failures

---

## 2.5 End-to-End Testing

For important user journeys, test the complete flow.

Examples:

```text
Visitor
 ↓
Landing Page
 ↓
Product
 ↓
Add to Cart
 ↓
Checkout
 ↓
Payment / Submission
 ↓
Confirmation
```

Or:

```text
User
 ↓
Register
 ↓
Login
 ↓
Dashboard
 ↓
Perform Action
 ↓
Logout
```

Prioritize critical business flows.

---

# 3. Functional Testing

Every feature must have a clear expected behavior.

Test:

- Buttons
- Links
- Forms
- Navigation
- Search
- Filters
- Sorting
- Pagination
- CRUD operations
- Authentication
- Authorization
- File uploads
- Downloads
- Modals
- Notifications
- API requests
- Database operations

### Functional checklist

- [ ] Feature works on the happy path
- [ ] Invalid input is handled
- [ ] Missing input is handled
- [ ] Server errors are handled
- [ ] Loading state works
- [ ] Success state works
- [ ] Error state works
- [ ] User can recover from errors
- [ ] Data remains consistent after the operation

---

# 4. Happy Path Testing

Always test the expected successful flow first.

Example:

```text
Open page
 ↓
Enter valid information
 ↓
Submit
 ↓
API succeeds
 ↓
Success feedback
 ↓
Expected data appears
```

Verify that:

- The correct API is called
- The correct data is sent
- The correct response is handled
- UI updates correctly
- Success feedback is shown
- Navigation occurs when appropriate

---

# 5. Negative Testing

Test what happens when users provide incorrect information.

Examples:

- Empty input
- Invalid email
- Invalid password
- Incorrect credentials
- Invalid ID
- Missing required field
- Unsupported file
- Oversized file
- Duplicate value
- Unauthorized request
- Expired session
- Invalid token
- Network failure
- Server error

The application should fail gracefully.

---

# 6. Edge Case Testing

Always consider unusual but valid or possible scenarios.

Examples:

- Very long text
- Very short text
- Zero results
- One result
- Thousands of results
- Duplicate records
- Special characters
- Unicode characters
- Slow network
- Offline state
- Expired authentication
- Empty database
- Missing image
- Broken image
- Very large image
- Multiple rapid clicks
- Double form submission

Do not assume users will behave perfectly.

---

# 7. Responsive Testing

Test every important page at:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

At minimum verify:

- No horizontal overflow
- Navigation works
- Text remains readable
- Buttons remain usable
- Forms fit correctly
- Cards adapt correctly
- Tables remain usable
- Modals fit the viewport
- Images do not distort
- Touch targets are usable
- Content hierarchy remains clear

Do not simply shrink the desktop layout.

---

# 8. Cross-Browser Testing

Test major supported browsers.

Recommended baseline:

```text
Chrome
Firefox
Safari
Edge
```

Check:

- Layout
- Fonts
- Animations
- Forms
- Navigation
- JavaScript behavior
- API requests
- Authentication
- Storage
- Responsive behavior

If a browser is explicitly unsupported, document that decision.

---

# 9. Accessibility Testing

Every feature should be reviewed for accessibility.

Check:

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Form labels
- Button accessibility
- Image alt text
- Color contrast
- Screen-reader compatibility
- Error messages
- Modal focus behavior
- Logical tab order

Do not use color as the only way to communicate status.

Example:

Bad:

```text
Red = Error
Green = Success
```

Better:

```text
Icon + Text + Color
```

---

# 10. Authentication Testing

Test:

- Registration
- Login
- Logout
- Invalid credentials
- Expired token/session
- Refresh behavior
- Protected routes
- Unauthorized access
- Role-based access
- Permission boundaries

Example:

```text
Student
  ↓
Student Dashboard ✓

Student
  ↓
Admin Dashboard ✗
```

Frontend route protection is not sufficient. Backend authorization must also be tested.

---

# 11. API & Database Testing

Verify:

- Request validation
- Response validation
- Database constraints
- Foreign keys
- Unique constraints
- Transactions
- Error handling
- Data consistency
- Pagination
- Filtering
- Sorting

Test database failures where practical.

Never assume the database will always be available.

---

# 12. Performance Testing

Check:

- Initial page load
- JavaScript bundle size
- Image sizes
- API response time
- Rendering performance
- Large lists
- Large tables
- Search performance
- Filtering performance
- Animation smoothness

Avoid performance regressions.

Before adding a dependency, ask:

```text
Is it necessary?
Can existing project functionality solve this?
What is its bundle/runtime cost?
```

---

# 13. Code Quality Standards

The codebase must remain:

- Readable
- Maintainable
- Predictable
- Modular
- Type-safe where applicable
- Reusable
- Testable

Prefer:

```text
Small Components
+
Clear Responsibilities
+
Reusable Logic
+
Strong Types
+
Consistent Naming
```

Avoid:

```text
Giant Components
+
Duplicated Logic
+
Magic Values
+
Dead Code
+
Unnecessary Dependencies
```

---

# 14. Component Quality

Components should generally have one clear responsibility.

Bad:

```text
Dashboard.tsx
```

containing:

- API calls
- Authentication logic
- Database logic
- 1000+ lines of UI
- Validation
- Formatting
- Multiple unrelated features

Prefer separation:

```text
Dashboard
├── DashboardHeader
├── StatsCards
├── ActivityChart
├── RecentItems
└── DashboardActions
```

Separate reusable logic into appropriate hooks, services, utilities, or modules.

---

# 15. Naming Standards

Use meaningful names.

Bad:

```text
data
thing
temp
x
handleStuff()
```

Better:

```text
students
selectedProduct
isSubmitting
handleStudentCreate()
```

Names should communicate intent.

---

# 16. Type Safety

When using a typed language:

- Avoid unnecessary `any`
- Define interfaces/types
- Type API responses
- Type component props
- Type function parameters
- Type state appropriately
- Keep frontend and backend contracts consistent

Do not bypass the type system simply to make errors disappear.

---

# 17. Error Handling

Every asynchronous operation should account for failure.

Example:

```text
Loading
   ↓
Success
   OR
Error
```

Never leave users with:

```text
Nothing happened.
```

Instead provide useful feedback:

```text
Unable to load products.
Please try again.
```

Technical details should be logged appropriately but not exposed unnecessarily to users.

---

# 18. Regression Testing

When modifying existing functionality:

1. Test the changed feature.
2. Test related features.
3. Test critical existing flows.
4. Check for visual regressions.
5. Check API behavior.
6. Check authentication if affected.

A bug fix should not introduce another bug.

---

# 19. Pre-Completion Quality Gate

Before declaring a feature complete:

### Functionality

- [ ] Happy path works
- [ ] Negative cases work
- [ ] Edge cases considered
- [ ] API works
- [ ] Database behavior is correct

### UI

- [ ] UI is consistent
- [ ] Responsive
- [ ] Accessible
- [ ] Loading state exists
- [ ] Empty state exists
- [ ] Error state exists
- [ ] Success feedback exists

### Code

- [ ] No unnecessary duplication
- [ ] No dead code
- [ ] No unnecessary dependencies
- [ ] Meaningful naming
- [ ] Proper types
- [ ] Separation of concerns

### Quality

- [ ] Browser compatibility checked
- [ ] Performance considered
- [ ] Security considered
- [ ] Existing features still work

---

# 20. Definition of Done

A feature is considered DONE only when:

```text
Implemented
    +
Tested
    +
Responsive
    +
Accessible
    +
Error-safe
    +
Performance-reviewed
    +
Code-quality-reviewed
    +
Regression-tested
```

If an important item is missing, do not silently mark the feature complete.

---

# DO

- Test real user flows
- Test failure scenarios
- Test mobile layouts
- Test accessibility
- Test APIs
- Test authentication
- Test edge cases
- Keep components maintainable
- Remove unnecessary code
- Review changes before completion

# DON'T

- Test only the happy path
- Assume desktop means responsive
- Ignore browser differences
- Ignore accessibility
- Hide errors
- Use `any` everywhere
- Create giant components
- Duplicate business logic
- Mark features complete without testing
