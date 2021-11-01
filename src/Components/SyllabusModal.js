import { Modal} from 'react-bootstrap'

export default function SyllabusModal({ closeModal, container }) {
    return (
        <>
            <Modal className="my-modal" show={true} onHide={closeModal}>
                <Modal.Header closeButton>SYLLABUS</Modal.Header>
                <Modal.Body>
                    <ul>
                        {
                            container.map(({ id, topics }) => {
                                return (
                                    <>
                                        <h5 key={id}><b>{id}</b></h5>
                                        {
                                            topics.map((topic, itr) => {
                                                return (
                                                    <li key={itr} style={{ padding: "5px" }}>{topic}</li>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    )
}