import { HttpError } from 'wasp/server'

export const createFacultyPayment = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  const user = await context.entities.User.findUnique({ where: { id: context.user.id } });
  if (user.role !== 'FACULTY') { throw new HttpError(403) };
  return context.entities.FacultyPayment.create({ data: { amount: args.amount, isPaid: false, userId: context.user.id } });
}

export const updateFacultyPayment = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const user = await context.entities.User.findUnique({
    where: { id: context.user.id }
  });
  if (user.role !== 'FACULTY') { throw new HttpError(403) };

  return context.entities.FacultyPayment.update({
    where: { id: args.paymentId },
    data: { isPaid: args.isPaid }
  });
}

export const createBooking = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.Booking.create({
    data: {
      seatNumber: args.seatNumber,
      userId: context.user.id
    }
  });
}