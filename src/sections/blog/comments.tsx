export default function Comments({ comments }: { comments?: string }) {
    return (
        <form>
            <div className="single-form">
                <textarea rows={1} name="message" data-error="" placeholder="Saisir un commentaire" required></textarea>
            </div>
            <div className="single-form text-end">
                <button type="submit" className="main-btn gradient-btn focus:outline-none uppercase">Publier</button>
            </div>
        </form>
    )
}