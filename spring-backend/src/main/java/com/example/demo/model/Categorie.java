package com.example.demo.model;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
@Entity
@Table(name="Categories")
public class Categorie {
   public Categorie() {
	
	}
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(nullable = false, updatable = false)
	private long id;
	@Column(name="title")
	private String title;
	@JsonIgnore
	 @OneToMany(mappedBy="id")
	    private Set<Course> items;
	public Categorie(long id, String title, Set<Course> items) {
		super();
		this.id = id;
		this.title = title;
		this.items = items;
	}
	public Set<Course> getItems() {
		return items;
	}
	public void setItems(Set<Course> items) {
		this.items = items;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Categorie(long id, String title) {
		super();
		this.id = id;
		this.title = title;
	}
	
	

}
