import { Op } from 'sequelize';
import { startOfDay, endOfDay, parseISO } from 'date-fns';
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    // const { page = 1 } = req.query;
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      res.status(401).json({ error: 'User is not a provider!' });
    }

    const { date } = req.query;
    const parseDate = parseISO(date);

    const appointment = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)],
        },
      },
      order: ['date'],
    });

    return res.json(appointment);
  }
}

export default new ScheduleController();
