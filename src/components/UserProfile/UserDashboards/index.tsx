import Container from "@/components/UI/Container";
import React, { useCallback, useState } from "react";
import Dashboard from "./Dashboard";
import Hood from "./Hood";
import Projects from "./Projects";
import Requests from "./Requests";

type Props = {};

const UserDashboards = (props: Props) => {
  const [selectedSection, setSelectedSection] = useState(1);
  const sectionHandler = useCallback((id: number) => {
    setSelectedSection(id);
  }, []);

  return (
    <Container className="pt-16 pb-12">
      <Hood sectionHandler={sectionHandler} selectedSection={selectedSection} />
      {selectedSection === 0 ? (
        <Dashboard />
      ) : selectedSection === 1 ? (
        <Requests />
      ) : (
        <Projects />
      )}
    </Container>
  );
};

export default UserDashboards;
