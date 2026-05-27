import { useState } from 'react';

import {
  Container,
  Row,
  Col,
  Card,
  Form
} from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import { posts } from '../data/posts';

function PostList() {

  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <Container className="py-4">

      <h2 className="mb-4">
        📚 Danh sách bài viết
      </h2>

      <Form.Control
        className="mb-4"
        placeholder="Tìm bài viết..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row>

        {filteredPosts.map(post => (

          <Col
            md={4}
            key={post.id}
            className="mb-4"
          >

            <Card
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/posts/${post.id}`)}
            >

              <Card.Body>

                <Card.Title>
                  {post.title}
                </Card.Title>

                <Card.Text>
                  {post.body}
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </Row>

    </Container>

  );
}

export default PostList;