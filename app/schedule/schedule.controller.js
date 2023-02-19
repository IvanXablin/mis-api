import { createRecord } from "./record.service.js";

// @desc get schedule
// @route POST /api/record/create
export const getSchedule = async (request, response) => {
    response.json(createRecord(request.body));
};