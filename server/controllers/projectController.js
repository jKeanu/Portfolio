import Project from '../models/projectModel.js';
import catchAsync from '../utils/catchAsync.js';

const cloudfrontDomainName = process.env.CLOUDFRONT_DOMAIN_NAME;

export const getFirstSix = catchAsync(async (req, res, _next) => {
  const projects = await Project.find({})
    .sort({ dateCreated: -1 }) // Sorting by dateCreated in descending order
    .limit(6)
    .lean(); // Limiting the results to the first 6 documents
  for (const project of projects) {
    project.photoUrl = `${cloudfrontDomainName}/${project.logo.photo}`;
  }
  res.status(200).json({
    status: 'success',
    projects,
  });
});
