import { HttpError } from 'wasp/server'

export const getSchedule = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }
  return context.entities.Schedule.findMany()
}

export const getFacultyPayments = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }
  const user = await context.entities.User.findUnique({ where: { id: context.user.id } })
  if (user.role !== 'FACULTY') { throw new HttpError(403, 'User is not a faculty member') }
  return context.entities.FacultyPayment.findMany({ where: { userId: context.user.id } })
}

export const getBookings = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }
  return context.entities.Booking.findMany({ where: { userId: context.user.id } })
}