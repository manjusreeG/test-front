# Joovence front-end test

This is the technical test for your front-end application at Joovence. You are evaluated on your React knowledge, how you structure your code and the quality of the interface you are develop.

You are free to add any package you need (helpers, UI library, date formatter, http client, etc...)

For each instruction you decide on how the interface should look like.

## Instructions

### Doctors availabilities page

- Create a page `/availabilities` to display the list of doctors and their availabilities.
  - Fetch doctors and display the list of doctors.
  - Fetch each doctors' availabilities and display them as soon as available.
- User should then be able to select an availability to book with a doctor.
  - Allow a user to schedule a booking.
  - When a user schedules a booking, redirect to a page `/bookings` where you display as much information as possible

### API endpoints

- `GET https://tech-test.joovence.dev/api/doctors`
- `GET https://tech-test.joovence.dev/api/availabilities?doctorId={DOCTOR_ID}`
- `POST https://tech-test.joovence.dev/api/bookings`
  - Body :
    - `date` DateTime of the booking `Y-m-d H:m:s`
    - `doctorId` Doctor's id

## Bonus

- Testing
- Typescript
- Elegant interface

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
