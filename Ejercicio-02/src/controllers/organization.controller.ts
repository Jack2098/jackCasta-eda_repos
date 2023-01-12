import { Request, Response } from "express";
import { OrganizationSchema } from "../models/organization.model";
import { Organization } from "../interfaces/organization.interface";

const getAllOrganizationCtrl = async (req: Request, res: Response) => {
  try {
    await OrganizationSchema.sync({force: false})
    const response = await OrganizationSchema.findAll();
    res.json({data: response});
  } catch (e) {
    console.error(e);
  }
};

const createOrganizationCtrl = async ({ body }: Request, res: Response) => {
  try {
    const organization: Organization = body
    const response = await OrganizationSchema.create(organization);
    res.json({data: response});
  } catch (e) {
    console.error(e);
  }
};

const editOrganizationCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;

    const organization: Organization = body
    const response = await OrganizationSchema.update(organization,
      {
        where: {
          id_organization: id,
        }
      });

    res.json({data: response});
  } catch (e) {
    console.log(e)
  }
};

const deleteOrganizationCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const response = await OrganizationSchema.destroy({
      where: {
        id_organization: id,
      }
    });
    res.json({data: response});
  } catch (e) {
    console.log(e)
  }
};

export {
  getAllOrganizationCtrl,
  createOrganizationCtrl,
  editOrganizationCtrl,
  deleteOrganizationCtrl
}