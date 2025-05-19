import { useRef, useState } from "react";
import { useLRUCache } from "./hooks/useLRUCache";
import styles from "./Users.module.css";
const names = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Evans",
  "Diana Carter",
  "Ethan Brown",
  "Fiona Clark",
  "George Miller",
  "Hannah Wilson",
  "Isaac Lee",
  "Julia Adams",
];

export default function Users() {
  const [users, setUsers] = useState(names);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [usersBackup, setUsersBackup] = useState(names);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { get, put, cache } = useLRUCache(4);

  const onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setUsers(usersBackup);
    }
    setSearchText(event.target.value);
  };

  const handleEntertoSearch = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (!searchText) {
      setUsers(usersBackup);
      return;
    }
    if (event.key === "Enter") {
      if (cache.has(searchText)) {
        setUsers(get(searchText));
        return;
      }
      const searchResults = users.filter((user) =>
        user.toLowerCase().includes(searchText.toLowerCase())
      );
      setUsers(searchResults);
      put(searchText, searchResults);
      inputRef.current?.blur();
    }
  };

  const loadFromCache = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (cache.has(target.id)) {
      setUsers(get(target.id));
      setSearchText(target.id);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.searchSection}>
        <input
          type="search"
          name="search"
          ref={inputRef}
          className={styles.searchInput}
          onInput={onChangeSearchText}
          onKeyDown={handleEntertoSearch}
          placeholder="Press enter after typing to see results"
          value={searchText}
        />
      </section>

      {cache.size ? (
        <section className={styles.cacheSection}>
          <h2 className={styles.cacheTitle}>Recently Searched</h2>
          <div className={styles.cacheContainer}>
            {Array.from(cache.entries()).map(([key]) => (
              <span
                key={key}
                id={key}
                className={styles.cacheChip}
                onClick={loadFromCache}
              >
                {key}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <section className={styles.resultsSection}>
        <h2 className={styles.resultsTitle}>Users</h2>
        <ul className={styles.resultsList}>
          {users.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
