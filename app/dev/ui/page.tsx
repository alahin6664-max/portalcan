import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Heading,
  Section,
  Spinner,
  Stack,
  Text,
} from "@/components/ui";

export default function UIPlayground() {
  return (
    <Section>
      <Container>
        <Stack gap="xl">

          <Heading
            level={1}
            title="PortalCan UI"
            subtitle="Playground de componentes"
          />

          {/* Buttons */}

          <Card>
            <Heading level={2} title="Buttons" />

            <div className="mt-6 flex flex-wrap gap-4">
              <Button>Primary</Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button variant="outline">
                Outline
              </Button>

              <Button variant="ghost">
                Ghost
              </Button>

              <Button variant="danger">
                Danger
              </Button>

              <Button loading />

              <Button disabled>
                Disabled
              </Button>
            </div>
          </Card>

          {/* Badge */}

          <Card>
            <Heading level={2} title="Badge" />

            <div className="mt-6 flex gap-4">
              <Badge>Primary</Badge>

              <Badge variant="success">
                Success
              </Badge>

              <Badge variant="warning">
                Warning
              </Badge>

              <Badge variant="error">
                Error
              </Badge>
            </div>
          </Card>

          {/* Text */}

          <Card>
            <Heading level={2} title="Typography" />

            <Text>
              Texto normal
            </Text>

            <Text muted>
              Texto secundario
            </Text>
          </Card>

          {/* Spinner */}

          <Card>
            <Heading level={2} title="Spinner" />

            <Spinner />
          </Card>

          {/* Divider */}

          <Card>
            <Heading level={2} title="Divider" />

            <Divider />

            <Text>
              Contenido debajo del Divider
            </Text>
          </Card>

        </Stack>
      </Container>
    </Section>
  );
}