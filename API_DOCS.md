
### `API_DOCS.md`

Файл `API_DOCS.md` предназначен для документирования API вашего проекта. Вот пример содержимого для этого файла:

```markdown
# Документация API

## Аукционы

### Получить список аукционов

**URL**: `/api/auctions/`

**Метод**: `GET`

**Успешный ответ**:
- **Код**: 200
- **Содержимое**:
  ```json
  [
    {
      "id": 1,
      "seller": 1,
      "title": "Sample Auction",
      "description": "This is a sample auction.",
      "starting_price": "100.00",
      "current_price": "90.00",
      "start_time": "2024-01-01T00:00:00Z",
      "end_time": "2024-01-08T00:00:00Z"
    }
  ]
  {
  "id": 1,
  "seller": 1,
  "title": "Sample Auction",
  "description": "This is a sample auction.",
  "starting_price": "100.00",
  "current_price": "90.00",
  "start_time": "2024-01-01T00:00:00Z",
  "end_time": "2024-01-08T00:00:00Z"
}