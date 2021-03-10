import { useState } from "react";

const Career = () => {

    const [data] = useState([
            {
                "id": 1,
                "step": 1,
                "description": "Dinosaurs",
                "imagePath": "\uD83E\uDD95",
                "synopsis": "65 million years ago when dinosaurs still roamed the earth. Technically speaking this is the Cretaceous–Paleogene (k-Pg) boundary and not the Jurassic."
            },
            {
                "id": 2,
                "step": 2,
                "description": "Graduation",
                "imagePath": "\uD83C\uDF93",
                "synopsis": "After four years and two industry placements, I emerged from Kingston (Upon Thames) Polytechnic with a BSc.(Hons) in computer science."
            },
            {
                "id": 3,
                "step": 3,
                "description": "Eli Lilly and Company",
                "imagePath": "\uD83D\uDC8A",
                "synopsis": "Everything from COBOL/CICS, for financial data entry, to an application for sales representatives laptops, written in Turbo Pascal."
            },
            {
                "id": 4,
                "step": 4,
                "description": "Heron Suzuki GB",
                "imagePath": "\uD83D\uDE99",
                "synopsis": "Warehousing systems in C & Basic running on VAX/VMS, MS Visual Basic & Access for bespoke applications and a Viewdata system."
            },
            {
                "id": 5,
                "step": 5,
                "description": "Cigna",
                "imagePath": "\uD83D\uDDC2",
                "synopsis": "My entry into the financial services world and working in London. Bespoke applications for the Energy, Oil & Gas markets in PowerBuilder and Sybase SQL Server."
            },
            {
                "id": 6,
                "step": 6,
                "description": "Contracting",
                "imagePath": "\uD83D\uDDA5",
                "synopsis": "Working on projects for a variety of clients, in three to twelve month contracts, building PowerBuilder applications with Microsoft or Sybase SQL Server."
            },
            {
                "id": 7,
                "step": 7,
                "description": "Chubb",
                "imagePath": "\uD83D\uDCBB",
                "synopsis": "Moving from PowerBuilder desktop applications to creating, and evolving, browser based applications for the Claims and High Net Worth business units, using Java and the ecology that surrounds it."
            },
            {
                "id": 8,
                "step": 8,
                "description": "Career Break",
                "imagePath": "\uD83C\uDFD6",
                "synopsis": "After over 20 years working in the financial services sector in London I decided to take a break to pursue my own interests and catch up on some gardening."
            },
            {
                "id": 9,
                "step": 9,
                "description": "The Future...",
                "imagePath": "\uD83D\uDE80",
                "synopsis": "I’m now looking to return to the world of development and wondering where it might take me next. I feel I still have much to contribute."
            }
        ]
    );

    return (
        <div id="careerCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {data.map(period => (
                <div className="carousel-item{% if period.step == 1 %} active{% endif %}">
                    <div className="card">
                        <div className="card-header">
                            <div className="btn-group float-right">
                                <button type="button" className="btn btn-link" title="Add a new career period">
                                    <span className="fas fa-plus"/>
                                </button>
                                <button type="button" className="btn btn-link" title="Edit this career period">
                                    <span className="far fa-edit"/>
                                </button>
                                <button type="button" className="btn btn-link" title="Delete this career period">
                                    <span className="far fa-trash-alt"/>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <fieldset disabled>
                                    <div className="row">
                                        <div className="col-md-2 text-center">
                                            <div className="display-1"><span aria-hidden="true">{ period.imagePath }</span></div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="step{ period.id }">Step</label>
                                                    <input type="text" className="form-control" id="step{ period.id }"
                                                           value={ period.step } />
                                                </div>
                                                <div className="form-group col-md-10">
                                                    <label htmlFor="description{ period.id }">Description</label>
                                                    <input type="text" className="form-control" id="description{ period.id }"
                                                           value={ period.description } />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Image</label>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="imagePath{ period.id }" />
                                                        <label className="custom-file-label"
                                                               htmlFor="imagePath{ period.id }">{ period.imagePath }</label>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="synopsis{ period.id }">Synopsis</label>
                                                <textarea className="form-control" id="synopsis{ period.id }" rows="3">
{ period.synopsis }
</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="row">
                <a className="carousel-control-prev col" href="#careerCarousel" role="button" data-slide="prev">
                    <span className="fas fa-angle-left text-dark" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next col" href="#careerCarousel" role="button" data-slide="next">
                    <span className="fas fa-angle-right text-dark" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Career;
