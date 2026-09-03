import { ExternalLink } from "lucide-react";
import Modal from "../ui/Modal";
import PlaceholderPreview from "../ui/PlaceholderPreview";
import Button from "../ui/Button";

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <Modal open={Boolean(certificate)} onClose={onClose} labelledBy="certificate-modal-title">
      {certificate.image ? (
        <img
          src={certificate.image}
          alt={`${certificate.name} certificate`}
          className="w-full rounded-xl mb-6"
        />
      ) : (
        <PlaceholderPreview label="Certificate Preview" className="w-full rounded-xl aspect-video mb-6" />
      )}
      <span className="font-mono text-xs text-accent">{certificate.category}</span>
      <h3 id="certificate-modal-title" className="font-display text-2xl font-bold text-ink mt-2">
        {certificate.name}
      </h3>
      <p className="text-ink-muted mt-1">{certificate.org}</p>
      <p className="font-mono text-sm text-ink-dim mt-4">{certificate.date}</p>

      {certificate.verifyUrl && (
        <Button
          href={certificate.verifyUrl}
          variant="ghost"
          icon={ExternalLink}
          className="mt-6"
        >
          Verify Certificate
        </Button>
      )}
    </Modal>
  );
}
