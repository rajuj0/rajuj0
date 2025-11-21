function bookingCreated(booking) {
  return {
    type: 'BOOKING_CREATED',
    occurredAt: new Date().toISOString(),
    payload: {
      id: booking.id,
      patientId: booking.patient_id,
      scheduledFor: booking.scheduled_for
    }
  };
}

function analyticsRequested(request) {
  return {
    type: 'ANALYTICS_REQUESTED',
    occurredAt: new Date().toISOString(),
    payload: request
  };
}

module.exports = { bookingCreated, analyticsRequested };
